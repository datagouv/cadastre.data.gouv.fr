import MapIcon from 'react-icons/lib/fa/flask'
import Page from '../../layouts/main'

import Head from '../../components/head'
import CadastreStrasbourg from '../../components/cadastre-strasbourg'

const title = 'Données cadastrales Eurométropole de Strasbourg'
const description = 'L’Eurométropole de Strasbourg est une métropole française située dans le département du Bas-Rhin. Elle fait partie du pôle métropolitain Strasbourg-Mulhouse-Colmar qui fédère les grandes intercommunalités alsaciennes.'

export default () => (
  <Page title={title} description={description}>
    <Head title={title} icon={<MapIcon />}>
      {description}
    </Head>
    <CadastreStrasbourg />
  </Page>
)
