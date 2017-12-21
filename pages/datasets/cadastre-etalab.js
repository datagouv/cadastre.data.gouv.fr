import FlaskIcon from 'react-icons/lib/fa/flask'
import Page from '../../layouts/main'

import Head from '../../components/head'
import CadastreEtalab from '../../components/cadastre-etalab'

const title = 'Cadastre par Etalab'
const description = 'Le plan cadastral est le découpage du territoire français en unités de surfaces permettant le calcul de certains impôts.'

export default () => (
  <Page title={title} description={description}>
    <Head title={title} icon={<FlaskIcon />}>
      <div>
        <p>{description}</p>
        <p>Chaque commune est subdivisée en sections, elles-mêmes subdivisées en feuilles (ou planches).
          Une feuille cadastrale comporte des parcelles, qui peuvent supporter des bâtiments.</p>
      </div>
    </Head>
    <CadastreEtalab />
  </Page>
)
