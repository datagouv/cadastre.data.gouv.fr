import DownloadIcon from 'react-icons/lib/fa/download'
import Page from '../../layouts/main'

import Head from '../../components/head'
import DownloadAssistant from '../../components/download-assistant/download-assistant'

export default () => (
  <Page>
    <Head title='Assistant de téléchargement' icon={<DownloadIcon />}>
      <div><p>Outils pour une prise en main rapide des données cadastre ouvertes.</p></div>
    </Head>
    <DownloadAssistant />
  </Page>
)
