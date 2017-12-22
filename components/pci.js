import Section from './section'
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
        <h4>Plan cadastral</h4>
        <p>Le plan cadastral est un assemblage d’environ <b>600 000 feuilles</b> ou planches représentant chacune une section ou une partie d’une section cadastrale.<br />
        Il couvre la France entière, à l’exception de la ville de Strasbourg et de quelques communes voisines, pour des raisons historiques liée à l’occupation de l’Alsace-Moselle par l’Allemagne entre 1871 et 1918.<br />
        Le plan cadastral est géré par la Direction Générale des Finances Publiques (DGFiP).
        </p>

        <h4>Numérisation du plan cadastral</h4>
        <p>Depuis la fin des années 1980, des initiatives de numérisation du plan se sont succédées et structurées pour atteindre un régime de croisière au cours des années 2000.<br />
        Cette numérisation est réalisée avec le concours financier des collectivités, et en particulier des communes, et se poursuit encore aujourd’hui.</p>

        <h4>PCI Vecteur et PCI Image</h4>
        <p>Pour des questions pratiques et techniques, le Plan Cadastral Informatisé existe sous la forme de <b>deux produits complémentaires</b> : le PCI Vecteur et le PCI Image.<br />
        Le <b>PCI Vecteur</b> regroupe les feuilles qui ont été numérisées et couvre l’essentiel du territoire.<br />
        Le <b>PCI Image</b> regroupe les feuilles qui n’ont été que scannées, et complète la couverture.</p>

        <h4>Couverture</h4>
        <p><b>32 864 communes</b> sont couvertes par le PCI Vecteur, sur un total de près de 36 000.
        Les plans des autres communes sont disponibles dans le PCI Image.<br />
        Strasbourg et les communes limitrophes ne sont actuellement pas gérées au format PCI.<br />
        Les collectivités d’outre-mer de Saint-Martin et de Saint-Barthelemy sont présentes et historiquement intégrées dans le département de la Guadeloupe (971).</p>

        <h4>Formats disponibles</h4>
        <p>Les données du PCI Vecteur sont disponibles dans plusieurs formats :</p>
        <ul>
          <li>Format <a href='https://www.data.gouv.fr/s/resources/plan-cadastral-informatise/20170906-150737/standard_edigeo_2013.pdf'>EDIGÉO</a> en projection Lambert 93 ;</li>
          <li>Format <a href='https://www.data.gouv.fr/s/resources/plan-cadastral-informatise/20170906-150737/standard_edigeo_2013.pdf'>EDIGÉO</a> en projection Lambert CC 9 zones (via l’assistant de téléchargement) ;</li>
          <li>Format <a href='https://www.data.gouv.fr/s/resources/pci-vecteur-plan-cadastral-informatise/20171207-172016/standard_dxf-pci_2013.pdf'>DXF-PCI</a> en projection Lambert 93.</li>
        </ul>
        <p>💡 Les données <a href='https://www.data.gouv.fr/s/resources/pci-vecteur-plan-cadastral-informatise/20171207-172016/standard_dxf-pci_2013.pdf'>DXF-PCI</a> en projection Lambert CC 9 zones seront ajoutées début 2018.</p>
        <p>Les données du PCI Image sont disponibles au format TIFF.</p>

        <h4>Modèle de données</h4>
        <p>Chaque commune est subdivisée en sections, elles-mêmes subdivisées en feuilles (ou planches).
    Une feuille cadastrale comporte des parcelles, qui peuvent supporter des bâtiments, ainsi que de nombreux autres objets d’habillage ou de gestion.<br />
        Pour plus de précision, veuillez vous reporter à la documentation du <a href='https://www.data.gouv.fr/s/resources/plan-cadastral-informatise/20170906-150737/standard_edigeo_2013.pdf'>standard EDIGÉO</a>.</p>

        <h4>Mise à disposition</h4>

        <p>Les données sont mises à disposition de deux manières :</p>
        <ul>
          <li>En <b>téléchargement direct</b> à la <b>feuille</b> ou en <b>archive départementale</b>, pour les formats EDIGÉO-L93, DXF-PCI-L93 et TIFF. Ce sont ces URL qu’il faut utiliser si vous souhaitez <b>automatiser la récupération des données</b> et <b>bénéficier des meilleures performances</b>.</li>
          <li>Via un outil en ligne pour les <b>archives communales</b> et pour le format EDIGÉO-CC. Les données sont alors produites à la volée.</li>
        </ul>
        <p>Les deux modes de mise à disposition sont accessibles ci-dessous.</p>

        <h4>Outils</h4>

        <p>Les données au format <a href='https://www.data.gouv.fr/s/resources/plan-cadastral-informatise/20170906-150737/standard_edigeo_2013.pdf'>EDIGÉO</a> peuvent être exploitées avec les outils libres <a href='https://plugins.qgis.org/plugins/cadastre/' rel='nofollow'>QGIS</a>, <a href='http://wiki.openstreetmap.org/wiki/FR:JOSM' rel='nofollow'>JOSM</a> ou <a href='https://gdal.gloobe.org/ogr/formats/edigeo.html' rel='nofollow'>GDAL</a>. Elles peuvent aussi être ouvertes avec des applications métiers conçues pour les collectivités locales.<br />
        Les données au format <a href='https://www.data.gouv.fr/s/resources/pci-vecteur-plan-cadastral-informatise/20171207-172016/standard_dxf-pci_2013.pdf'>DXF-PCI</a> peuvent être ouvertes avec des outils bureautiques de CAO/DAO.</p>
      </div>
    </Section>
    <Section title='Millésimes disponibles en téléchargement direct' background='grey'>
      <p>Les liens suivants permettent de télécharger les données du plan cadastral <b>à la feuille</b>, ou <b>par département</b>.<br />Dans le cas d’un téléchargement à la feuille, vous serez invité à choisir un code département puis un code de commune.</p>
      <ul>
        {millesimes.map(millesime => (
          <li key={millesime.date}>
            <h5>{millesime.latest ? `Dernier millésime (${millesime.date})` : `Millésime ${millesime.date}`}</h5>
            <ul>
              {millesime.formats.map(format => (
                <li key={millesime.date + format}>
                  {formatLabels[format]} (<a href={getUrl(millesime, format, 'departements')}>par département</a>, <a href={getUrl(millesime, format, 'feuilles')}>par feuille</a>)
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
    <Section title='Aide au téléchargement' subtitle='Télécharger facilement n’importe quel niveau de granularité' beta>
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
