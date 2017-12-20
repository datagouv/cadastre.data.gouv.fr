import DownloadIcon from 'react-icons/lib/fa/download'
import Page from '../../layouts/main'

import Head from '../../components/head'
import Datasets from '../../components/datasets'

export default () => (
  <Page>
    <Head title='Données brutes' icon={<DownloadIcon />}>
      <div><p>cadaste.data.gouv.fr met en place des outils pour une prise en main rapide des données cadastre ouvertes.</p></div>
    </Head>
    <Datasets />
  </Page>
)
