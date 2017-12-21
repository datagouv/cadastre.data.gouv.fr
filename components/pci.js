import Section from './section'
import Ressource from './ressource'
import DownloadAssistant from './download-assistant/download-assistant'

const products = [
  {
    name: 'PCI Vecteur',
    formats: [
      'dxf',
      'edigeo',
      'edigeo/cc'
    ]
  },
  {
    name: 'PCI Image',
    formats: [
      'tiff'
    ]
  }
]

const millesimes = [
  {
    latest: true,
    date: '12 octobre 2017',
    path: 'latest',
    formats: ['dxf', 'edigeo', 'tiff']
  },
  {
    date: '12 octobre 2017',
    path: '2017-10-12',
    formats: ['dxf', 'edigeo', 'tiff']
  },
  {
    date: '6 juillet 2017',
    path: '2017-07-06',
    formats: ['edigeo']
  },
  {
    date: '14 mai 2017',
    path: '2017-05-14',
    formats: ['edigeo']
  },
  {
    date: '13 février 2017',
    path: '2017-02-13',
    formats: ['edigeo']
  }
]

function getUrl(millesime, selectedFormat, granularity) {
  return `https://cadastre.data.gouv.fr/data/${selectedFormat === 'tiff' ? 'dgfip-pci-image' : 'dgfip-pci-vecteur'}/${millesime.path}/${selectedFormat}/${granularity}`
}

const formatLabels = {
  tiff: 'Format TIFF (PCI Image)',
  edigeo: 'Format EDIGÉO',
  dxf: 'Format DXF-PCI'
}

const Pci = () => (
  <div>
    <Section>
      <div>
        <h4>Divisions</h4>
        <p>Chaque commune est subdivisée en sections, elles-mêmes subdivisées en feuilles (ou planches).
    Une feuille cadastrale comporte des parcelles, qui peuvent supporter des bâtiments, ainsi que de nombreux autres objets d’habillage ou de gestion.</p>
        <p>Pour plus de précision, veuillez vous reporter à la documentation du <a href='https://www.data.gouv.fr/s/resources/plan-cadastral-informatise/20170906-150737/standard_edigeo_2013.pdf'>standard EDIGÉO</a>.</p>

        <h4>Couverture</h4>
        <p>32 864 communes sont couvertes par le PCI Vecteur, sur un total de près de 36 000.
        Les plans des autres communes sont disponibles sous forme d’images, via le PCI Image (diffusion prévue courant octobre).</p>
        <p>Les collectivités d’outre-mer de Saint-Martin et de Saint-Barthelemy sont présentes et historiquement intégrées dans le département de la Guadeloupe (971).</p>

        <h4>PCI Vecteur et PCI Image</h4>

        <h4>Fichiers</h4>

        <p>Les données du Plan Cadastral Informatisé produites par la DGFiP sont disponibles aux formats suivants :</p>

        <ul>
          <li>EDIGÉO - projections officielles (Lambert 93 pour la France métropolitaine)</li>
          <li>DXF - projections officielles (Lambert 93 pour la France métropolitaine)</li>
        </ul>

        <p>Le téléchargement se fait <strong>par archive départementale</strong> ou <strong>par feuille</strong>.</p>
        <p>L’arborescence est la suivante :</p>
        <div>
          <pre><code>{`feuilles/{code_departement}/{code_commune}/{format}-{numero_feuille}.tar.bz2`}</code></pre>
        </div>
        <p>Exemple:</p>
        <p><a href='https://cadastre.data.gouv.fr/data/dgfip-pci-vecteur/latest/edigeo/feuilles/01/01001/edigeo-010010000A01.tar.bz2' rel='nofollow'>https://cadastre.data.gouv.fr/data/dgfip-pci-vecteur/latest/edigeo/feuilles/01/01001/edigeo-010010000A01.tar.bz2</a></p>

        <h4>Outils</h4>

        <p>Les données au format EDIGÉO peuvent être exploitées avec les outils libres <a href='https://plugins.qgis.org/plugins/cadastre/' rel='nofollow'>QGIS</a>, <a href='http://wiki.openstreetmap.org/wiki/FR:JOSM' rel='nofollow'>JOSM</a> ou <a href='https://gdal.gloobe.org/ogr/formats/edigeo.html' rel='nofollow'>GDAL</a>. Elles peuvent aussi être ouvertes avec des applications métiers conçues pour les collectivités locales.</p>
        <p>Les données au format DXF peuvent être ouvertes avec des outils bureautiques de CAO/DAO.</p>

        <h4>Voir aussi</h4>

        <p>Une partie des données du cadastre est également <a href='https://www.data.gouv.fr/fr/datasets/59b0020ec751df07d5f13bcf/'>mise à disposition par Etalab au format GeoJSON</a>.</p>
      </div>
    </Section>
    <Section title='Millésimes disponibles en téléchargement direct' background='grey'>
      <p>Les liens suivants permettent de télécharger les données du plan cadastral <b>à la feuille</b>, ou <b>par département</b>.<br />Dans le cas d’un téléchargement à la feuille, vous serez invité à choisir un code département puis un code de commune.</p>
      <p>Les URL de téléchargement sont maintenues dans le temps, il est donc tout à fait possible d’automatiser la récupération des données
        grâce à un script.</p>
      <ul>
        {millesimes.map(millesime => (
          <li key={millesime.date}>
            <h5>{millesime.latest ? `Dernier millésime (${millesime.date})` : `Millésime ${millesime.date}`}</h5>
            <ul>
              {millesime.formats.map(format => (
                <li key={millesime.date + format}>
                  {formatLabels[format]} (<a href={getUrl(millesime, format, 'departements')}>par départements</a>, <a href={getUrl(millesime, format, 'feuilles')}>par feuilles</a>)
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
    <Section title='Assistant de téléchargement' subtitle='Télécharger facilement n’importe quel niveau de granularité' beta>
      <DownloadAssistant productList={products} />
    </Section>
    <style jsx>{`
      .ressources {
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(320px,1fr));
        grid-gap: 1em;
        grid-row-gap: 0.6em;
        margin: 2em 0;
      }
    `}</style>
  </div>
)

export default Pci
