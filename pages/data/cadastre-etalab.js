import FlaskIcon from 'react-icons/lib/fa/flask'
import Page from '../../layouts/main'

import Head from '../../components/head'
import CadastreEtalab from '../../components/cadastre-etalab'

export default () => (
  <Page>
    <Head title='Cadastre par Etalab' icon={<FlaskIcon />}>
      <div>
        <p>Le plan cadastral est le découpage du territoire français en unités de surfaces permettant le calcul de certains impôts.</p>
        <p>Chaque commune est subdivisée en sections, elles-mêmes subdivisées en feuilles (ou planches).
          Une feuille cadastrale comporte des parcelles, qui peuvent supporter des bâtiments.</p>
      </div>
    </Head>
    <CadastreEtalab />
  </Page>
)
