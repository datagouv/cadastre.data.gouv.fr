import React from 'react'
import Section from './section'
import DownloadAssistant from './download-assistant/download-assistant'
import Millesimes from './millesimes'

const products = [
  {
    name: 'PCI Vecteur',
    formats: [
      'dxf',
      'dxf/cc',
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
    date: '1er octobre 2019',
    path: '2019-10-01',
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']}
    ]
  },
  {
    date: '1er juillet 2019',
    path: '2019-07-01',
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']}
    ]
  },
  {
    date: '1er avril 2019',
    path: '2019-04-01',
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']}
    ]
  },
  {
    date: '1er janvier 2019',
    path: '2019-01-01',
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']}
    ]
  },
  {
    date: '1er octobre 2018',
    path: '2018-10-01',
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']}
    ]
  },
  {
    date: '29 juin 2018',
    path: '2018-06-29',
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']}
    ]
  },
  {
    date: '3 avril 2018',
    path: '2018-04-03',
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']}
    ]
  },
  {
    date: '2 janvier 2018',
    path: '2018-01-02',
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']}
    ]
  },
  {
    date: '12 octobre 2017',
    path: '2017-10-12',
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']}
    ]
  },
  {
    date: '6 juillet 2017',
    path: '2017-07-06',
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']}
    ]
  },
  {
    date: '14 mai 2017',
    path: '2017-05-14',
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']}
    ]
  },
  {
    date: '13 février 2017',
    path: '2017-02-13',
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']}
    ]
  }
]

function getUrl(path, selectedFormat, granularity) {
  return `https://cadastre.data.gouv.fr/data/${selectedFormat === 'tiff' ? 'dgfip-pci-image' : 'dgfip-pci-vecteur'}/${path}/${selectedFormat}/${granularity}`
}

const Pci = () => (
  <div>
    <Section>
      <div>
        <h4>Plan cadastral</h4>
        <p>Le plan cadastral est un assemblage d’environ <b>600 000 feuilles</b> ou planches représentant chacune une section ou une partie d’une section cadastrale.<br />
        Il couvre la France entière, à l’exception de la ville de Strasbourg et de quelques communes voisines, pour des raisons historiques liées à l’occupation de l’Alsace-Moselle par l’Allemagne entre 1871 et 1918.<br />
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
        <p><b>33 682 communes</b> sont couvertes par le PCI Vecteur, sur un total de près de 36 000.
        Les plans des autres communes sont disponibles dans le PCI Image.<br />
        Strasbourg et les communes limitrophes ne sont actuellement pas gérées au format PCI.<br />
        Les collectivités d’outre-mer de Saint-Martin et de Saint-Barthelemy sont présentes et historiquement intégrées dans le département de la Guadeloupe (971).</p>

        <h4>Formats disponibles</h4>
        <p>Les données du PCI Vecteur sont disponibles dans plusieurs formats :</p>
        <ul>
          <li>Format <a href='https://www.data.gouv.fr/s/resources/plan-cadastral-informatise/20170906-150737/standard_edigeo_2013.pdf'>EDIGÉO</a> en projection Lambert 93 ;</li>
          <li>Format <a href='https://www.data.gouv.fr/s/resources/plan-cadastral-informatise/20170906-150737/standard_edigeo_2013.pdf'>EDIGÉO</a> en projection Lambert CC 9 zones ;</li>
          <li>Format <a href='https://www.data.gouv.fr/s/resources/pci-vecteur-plan-cadastral-informatise/20171207-172016/standard_dxf-pci_2013.pdf'>DXF-PCI</a> en projection Lambert 93 ;</li>
          <li>Format <a href='https://www.data.gouv.fr/s/resources/pci-vecteur-plan-cadastral-informatise/20171207-172016/standard_dxf-pci_2013.pdf'>DXF-PCI</a> en projection Lambert CC 9 zones.</li>
        </ul>
        <p>Les données du PCI Image sont disponibles au format TIFF.</p>

        <h4>Modèle de données</h4>
        <p>Chaque commune est subdivisée en sections, elles-mêmes subdivisées en feuilles (ou planches).
    Une feuille cadastrale comporte des parcelles, qui peuvent supporter des bâtiments, ainsi que de nombreux autres objets d’habillage ou de gestion.<br />
        Pour plus de précision, veuillez vous reporter à la documentation du <a href='https://www.data.gouv.fr/s/resources/plan-cadastral-informatise/20170906-150737/standard_edigeo_2013.pdf'>standard EDIGÉO</a>.</p>

        <h4>Mise à disposition</h4>

        <p>Les données sont mises à disposition de deux manières :</p>
        <ul>
          <li>En <b>téléchargement direct</b> à la <b>feuille</b> ou en <b>archive départementale</b>. Ce sont ces URL qu’il faut utiliser si vous souhaitez <b>automatiser la récupération des données</b> et <b>bénéficier des meilleures performances</b>.</li>
          <li>Via un outil en ligne pour les <b>archives communales</b>. Les données sont alors produites à la volée.</li>
        </ul>
        <p>Les deux modes de mise à disposition sont accessibles ci-dessous.</p>

        <h4>Outils</h4>

        <p>Les données au format <a href='https://www.data.gouv.fr/s/resources/plan-cadastral-informatise/20170906-150737/standard_edigeo_2013.pdf'>EDIGÉO</a> peuvent être exploitées avec les outils libres <a href='https://plugins.qgis.org/plugins/cadastre/' rel='nofollow'>QGIS</a>, <a href='http://wiki.openstreetmap.org/wiki/FR:JOSM' rel='nofollow'>JOSM</a> ou <a href='https://gdal.gloobe.org/ogr/formats/edigeo.html' rel='nofollow'>GDAL</a>. Elles peuvent aussi être ouvertes avec des applications métiers conçues pour les collectivités locales.<br />
        Les données au format <a href='https://www.data.gouv.fr/s/resources/pci-vecteur-plan-cadastral-informatise/20171207-172016/standard_dxf-pci_2013.pdf'>DXF-PCI</a> peuvent être ouvertes avec des outils bureautiques de CAO/DAO.</p>
      </div>
    </Section>
    <Section title='Millésimes disponibles en téléchargement direct' background='grey'>
      <p>Les liens suivants permettent de télécharger les données du plan cadastral <b>à la feuille</b>, ou <b>par département</b>.<br />Dans le cas d’un téléchargement à la feuille, vous serez invité à choisir un code département puis un code de commune.</p>
      <p>Les URL de téléchargement sont maintenues dans le temps, il est donc tout à fait possible d’automatiser la récupération des données
        grâce à un script.</p>
      <p>NB : Il est possible de remplacer la date du millésime par `latest` dans les URL.</p>
      <Millesimes millesimes={millesimes} getUrl={getUrl} />
    </Section>
    <Section title='Aide au téléchargement' subtitle='Télécharger facilement n’importe quel niveau de granularité'>
      <DownloadAssistant productList={products} />
    </Section>
  </div>
)

export default Pci
