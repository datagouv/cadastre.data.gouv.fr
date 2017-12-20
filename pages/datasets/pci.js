import ThIcon from 'react-icons/lib/fa/th'
import Page from '../../layouts/main'

import Head from '../../components/head'
import Pci from '../../components/pci'

export default () => (
  <Page>
    <Head title='Plan Cadastral Informatisé (PCI)' icon={<ThIcon />}>
      <div>
        <p>Le plan cadastral est le découpage du territoire français en unités de surfaces permettant le calcul de certains impôts (notamment la taxe foncière, la taxe d’habitation et la cotisation foncière des entreprises). La consultation du cadastre peut se faire en ligne sur <a href='https://cadastre.gouv.fr' rel='nofollow'>cadastre.gouv.fr</a>.</p>
        <p>Chaque commune est subdivisée en sections, elles-mêmes subdivisées en feuilles (ou planches).
    Une feuille cadastrale comporte des parcelles, qui peuvent supporter des bâtiments, ainsi que de nombreux autres objets d’habillage ou de gestion.</p>
        <p>Pour plus de précision, veuillez vous reporter à la documentation du <a href='https://www.data.gouv.fr/s/resources/plan-cadastral-informatise/20170906-150737/standard_edigeo_2013.pdf'>standard EDIGÉO</a>.</p>
      </div>
    </Head>
    <Pci />
  </Page>
)
