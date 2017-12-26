import MapIcon from 'react-icons/lib/fa/flask'
import Page from '../../layouts/main'

import Head from '../../components/head'
import CadastreStrasbourg from '../../components/cadastre-strasbourg'

const title = 'Cadastre Eurométropole de Strasbourg'
const description = 'Données de référence pour l’Eurométropole de Strasbourg.'

export default () => (
  <Page title={title} description={description}>
    <Head title={title} icon={<MapIcon />}>
      {description}
    </Head>
    <CadastreStrasbourg />
  </Page>
)
