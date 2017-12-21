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

        <h4>Millésimes :</h4>

        <ul>
          <li>13 février 2017</li>
          <li>14 mai 2017</li>
          <li>6 juillet 2017</li>
          <li>12 octobre 2017 (plus récent)</li>
        </ul>

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
    <Section title='Ressources' background='grey'>
      <div className='ressources'>
        <Ressource
          title='Données dernier millésime'
          lastModification='Dernière modification le jeudi 9 novembre 2017'
          format='edigeo+dxf'
          link='https://cadastre.data.gouv.fr/data/dgfip-pci-vecteur/latest/' />

        <Ressource
          title='Données millésime 12 octobre 2017'
          lastModification='Dernière modification le jeudi 9 novembre 2017'
          format='edigeo+dxf'
          link='https://cadastre.data.gouv.fr/data/dgfip-pci-vecteur/2017-10-12/' />

        <Ressource
          title='Données millésime 6 juillet 2017'
          lastModification='Dernière modification le vendredi 29 septembre 2017'
          format='edigeo'
          link='https://cadastre.data.gouv.fr/data/dgfip-pci-vecteur/2017-07-06' />

        <Ressource
          title='Données millésime 14 mai 2017'
          lastModification='Dernière modification le vendredi 29 septembre 2017'
          format='edigeo'
          link='https://cadastre.data.gouv.fr/data/dgfip-pci-vecteur/2017-05-14' />

        <Ressource
          title='Données millésime 13 février 2017'
          lastModification='Dernière modification le vendredi 29 septembre 2017'
          format='edigeo'
          link='https://cadastre.data.gouv.fr/data/dgfip-pci-vecteur/2017-02-13/' />
      </div>
    </Section>
    <Section title='Assistant de téléchargement'>
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
