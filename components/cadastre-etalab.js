import Link from 'next/link'
import Section from './section'
import DownloadAssistant from './download-assistant/download-assistant'

const products = [
  {
    name: 'Cadastre Etalab',
    formats: [
      'geojson',
      'geojson/gz'
    ],
    layers: [
      'communes',
      'sections',
      'feuilles',
      'parcelles',
      'batiments'
    ]
  }
]

const millesimes = [
  {
    latest: true,
    date: '12 octobre 2017',
    path: 'latest',
    formats: ['geojson']
  },
  {
    date: '12 octobre 2017',
    path: '2017-10-12',
    formats: ['geojson']
  },
  {
    date: '6 juillet 2017',
    path: '2017-07-06',
    formats: ['geojson']
  }
]

function getUrl(millesime, selectedFormat, granularity) {
  return `https://cadastre.data.gouv.fr/data/etalab-cadastre/${millesime.path}/${selectedFormat}/${granularity}`
}

const CadastreEtalab = () => (
  <div>
    <Section>
      <div className='main'>
        <h4>Raison d’être de ce jeu de données</h4>
        <p>Le <Link href='/datasets/plan-cadastral-informatise'>Plan Cadastral Informatisé</Link> est diffusé sous deux formats experts rendant sa réutilisation difficile en dehors du contexte des applications métiers.<br />
        Etalab a donc pris l’initiative d’en redistribuer une version retravaillée, dans des formats plus largement répandus.<br /></p>

        <h4>Données sources</h4>
        <p>Ces données sont produites à partir :</p>
        <ul>
          <li>des <Link href='/datasets/plan-cadastral-informatise'>données EDIGÉO du PCI Vecteur</Link> ;</li>
          <li>des <Link href='/datasets/cadastre-strasbourg'>données cadastrales de l’Eurométropole de Strasbourg</Link>.</li>
        </ul>

        <h4>Processus de construction</h4>

        <p>Les différentes couches sont constituées par juxtaposition des feuilles, sans correction de topologie.<br />
        Les données de l’Eurométropole Strasbourg sont ajoutées par écrasement de celles éventuellement présentes dans le PCI Vecteur.<br />
        Le modèle de données est simplifié, et ne sont concervés que les <b>sections</b>, les <b>feuilles</b> (le cas échéant), les <b>parcelles</b>, les <b>limites de communes</b> et le <b>bâti</b>.<br />
        Le code source est ouvert et <a href='https://github.com/etalab/cadastre'>disponible sur GitHub</a>.
        </p>

        <h4>Couverture</h4>

        <p>Les 32 864 communes couvertes par le PCI Vecteur, ainsi que les communes de l’Eurométropole de Strasbourg.<br />
        Les collectivités d’outre-mer de Saint-Martin et de Saint-Barthelemy sont présentes et intégrées dans le département de la Guadeloupe (971).</p>

        <h4>Formats disponibles</h4>
        <p>Les données sont actuellement disponibles au format <a href='http://geojson.org/'>GeoJSON</a> compressé, et <a href='http://geojson.org/'>GeoJSON</a> simple via l’outil d’aide au téléchargement.<br />
        Les formats Shapefile et Geopackage seront proposés début 2018.</p>

        <h4>Couches géographiques</h4>

        <ul>
          <li>parcelles (multi polygones)</li>
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
        </ul>
      </div>
    </Section>
    <Section title='Millésimes disponibles en téléchargement direct' background='grey'>
      <p>Les liens suivants permettent de télécharger les données cadastrales <b>à la commune</b>, ou <b>au département</b>.<br />Dans le cas d’un téléchargement à la commune, vous serez invité à choisir un code département puis un code de commune.</p>
      <ul>
        {millesimes.map(millesime => (
          <li key={millesime.date}>
            <h5>{millesime.latest ? `Dernier millésime (${millesime.date})` : `Millésime ${millesime.date}`}</h5>
            <ul>
              {millesime.formats.map(format => (
                <li key={millesime.date + format}>
                  Format GeoJSON (<a href={getUrl(millesime, format, 'departements')}>par département</a>, <a href={getUrl(millesime, format, 'communes')}>par commune</a>)
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <p>L’arborescence est la suivante :</p>
      <p>Découpage communal :</p>
      <div>
        <pre><code>{`{format}/communes/{code_departement}/{code_commune}/cadastre-{code_commune}-{nom_couche}.json.gz`}</code></pre>
      </div>
      <p>Découpage départemental :</p>
      <div>
        <pre><code>{`{format}/departements/{code_departement}/cadastre-{code_departement}-{nom_couche}.json.gz`}</code></pre>
      </div>
      <p>Exemple :</p>
      <p><a href='https://cadastre.data.gouv.fr/data/etalab-cadastre/latest/geojson/communes/01/01001/cadastre-01001-batiments.json.gz' rel='nofollow'>https://cadastre.data.gouv.fr/data/etalab-cadastre/latest/geojson/communes/01/01001/cadastre-01001-batiments.json.gz</a></p>
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
