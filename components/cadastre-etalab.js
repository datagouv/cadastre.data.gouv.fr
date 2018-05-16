import Link from 'next/link'
import Section from './section'
import Millesimes from './millesimes'
import DownloadAssistant from './download-assistant/download-assistant'

const products = [
  {
    name: 'Cadastre Etalab',
    formats: [
      'geojson',
      'geojson/gz',
      'shp'
    ],
    layers: [
      'communes',
      'sections',
      'feuilles',
      'parcelles',
      'batiments',
      'lieux_dits'
    ]
  }
]

const millesimes = [
  {
    latest: true,
    date: '2 janvier 2018',
    path: '2018-01-02',
    formats: ['geojson'],
    granularities: ['communes', 'departements']
  },
  {
    date: '12 octobre 2017',
    path: '2017-10-12',
    formats: ['geojson'],
    granularities: ['communes', 'departements']
  },
  {
    date: '6 juillet 2017',
    path: '2017-07-06',
    formats: ['geojson'],
    granularities: ['communes', 'departements']
  }
]

function getUrl(path, selectedFormat, granularity) {
  return `https://cadastre.data.gouv.fr/data/etalab-cadastre/${path}/${selectedFormat}/${granularity}`
}

const CadastreEtalab = () => (
  <div>
    <Section>
      <div className='main'>
        <h4>Raison d’être de ce jeu de données</h4>
        <p>Le <Link href='/datasets/plan-cadastral-informatise'><a>Plan Cadastral Informatisé</a></Link> est diffusé sous deux formats experts rendant sa réutilisation difficile en dehors du contexte des applications métiers.<br />
        Etalab a donc pris l’initiative d’en redistribuer une version retravaillée, dans des formats plus largement répandus.<br /></p>

        <h4>Données sources</h4>
        <p>Ces données sont produites à partir :</p>
        <ul>
          <li>des <Link href='/datasets/plan-cadastral-informatise'><a>données EDIGÉO du PCI Vecteur</a></Link> ;</li>
          <li>des <Link href='/datasets/cadastre-strasbourg'><a>données cadastrales de l’Eurométropole de Strasbourg</a></Link>.</li>
        </ul>

        <h4>Processus de construction</h4>

        <p>Les différentes couches sont constituées par juxtaposition des feuilles, sans correction de topologie.<br />
        Les données de l’Eurométropole Strasbourg sont ajoutées par écrasement de celles éventuellement présentes dans le PCI Vecteur.<br />
        Le modèle de données est simplifié, et ne sont conservés que les <b>sections</b>, les <b>feuilles</b>, les <b>lieux-dits</b>, les <b>parcelles</b>, les <b>limites de communes</b> et le <b>bâti</b>.<br />
        Le code source est ouvert et <a href='https://github.com/etalab/cadastre'>disponible sur GitHub</a>.
        </p>

        <h4>Couverture</h4>

        <p>Les 32 864 communes couvertes par le PCI Vecteur, ainsi que les communes de l’Eurométropole de Strasbourg.<br />
        Les collectivités d’outre-mer de Saint-Martin et de Saint-Barthelemy sont présentes et intégrées dans le département de la Guadeloupe (971).</p>

        <h4>Formats disponibles</h4>
        <p>Les données sont actuellement disponibles au format <a href='http://geojson.org/'>GeoJSON</a> compressé, et <a href='http://geojson.org/'>GeoJSON</a> simple via l’outil d’aide au téléchargement.<br />
        💡 Les formats Shapefile et Geopackage seront proposés début 2018.</p>

        <h4>Couches géographiques</h4>

        <ul>
          <li>parcelles (polygones ou multi polygones)</li>
          <li>lieux_dits (polygones)</li>
          <li>feuilles (multi polygones)</li>
          <li>sections (multi polygones)</li>
          <li>communes (multi polygones)</li>
          <li>batiments (polygones)</li>
        </ul>

        <h4>Mise à disposition</h4>

        <p>Les données sont mises à disposition de deux manières :</p>
        <ul>
          <li>En <b>téléchargement direct</b> à la <b>commune</b> ou au <b>département</b>, pour le format <a href='http://geojson.org/'>GeoJSON</a> compressé. Ce sont ces URL qu’il faut utiliser si vous souhaitez <b>automatiser la récupération des données</b> et <b>bénéficier des meilleures performances</b>.</li>
          <li>Via un outil en ligne pour les données au format <a href='http://geojson.org/'>GeoJSON</a> et à terme pour les formats Shapefile et Geopackage.</li>
        </ul>
        <p>Les deux modes de mise à disposition sont accessibles ci-dessous.</p>

        <h4>Historique</h4>

        <ul>
          <li>30/09/2017 : première diffusion des données</li>
          <li>08/11/2017 : nouveau millésime PCI + correction projection Saint-Barthelemy et Saint-Martin + intégration données Strasbourg + corrections diverses (<a href='https://github.com/etalab/cadastre/issues?q=is%3Aclosed+label%3A%22cadastre+data%22+is%3Aissue+milestone%3A%22Sprint+%232%22' rel='nofollow'>détails</a>)</li>
          <li>07/02/2018 : nouveau millésime PCI + nouvelles données Strasbourg + ajout des lieux-dits + amélioration des géométries + corrections diverses (<a href='https://github.com/etalab/cadastre/issues?q=milestone%3A%22Livraison+01%2F2018%22+label%3A%22cadastre+data%22+is%3Aclosed' rel='nofollow'>détails</a>)</li>
        </ul>
      </div>
    </Section>
    <Section title='Millésimes disponibles en téléchargement direct' background='grey'>
      <p>Les liens suivants permettent de télécharger les données cadastrales <b>à la commune</b>, ou <b>au département</b>.<br />Dans le cas d’un téléchargement à la commune, vous serez invité à choisir un code département puis un code de commune.</p>
      <p>NB : Il est possible de remplacer la date du millésime par `latest` dans les URL.</p>
      <Millesimes millesimes={millesimes} getUrl={getUrl} />
    </Section>
    <Section title='Aide au téléchargement' subtitle='Télécharger facilement n’importe quel niveau de granularité' beta>
      <DownloadAssistant productList={products} />
    </Section>
    <style jsx>{`
      .ressources {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        grid-gap: 1em;
        grid-row-gap: 0.6em;
        margin: 2em 0;
      }
    `}</style>
  </div>
)

export default CadastreEtalab
