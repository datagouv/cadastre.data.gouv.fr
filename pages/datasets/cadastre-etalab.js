import FlaskIcon from 'react-icons/lib/fa/flask'
import Page from '../../layouts/main'

import Head from '../../components/head'
import CadastreEtalab from '../../components/cadastre-etalab'

const title = 'Cadastre Etalab'
const description = 'Données consolidées pour la France entière, produites par Etalab à partir des données de référence.'

export default () => (
  <Page title={title} description={description}>
    <Head title={title} icon={<FlaskIcon />}>
      {description}
    </Head>
    <CadastreEtalab />
  </Page>
)
