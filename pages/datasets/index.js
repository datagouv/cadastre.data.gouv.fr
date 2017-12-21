import DownloadIcon from 'react-icons/lib/fa/download'
import Page from '../../layouts/main'

import Head from '../../components/head'
import Datasets from '../../components/datasets'

const title = 'Données brutes'
const description = 'cadaste.data.gouv.fr met en place des outils pour une prise en main rapide des données cadastre ouvertes.'

export default () => (
  <Page title={title} description={description}>
    <Head title={title} icon={<DownloadIcon />}>
      {description}
    </Head>
    <Datasets />
  </Page>
)
