import FaQuestion from 'react-icons/lib/fa/question'
import Page from '../layouts/main'

import Head from '../components/head'
import Faq from '../components/faq'

const title = 'Foire aux questions'
const description = 'En savoir plus sur cadastre.data.gouv.fr.'

export default () => (
  <Page title={title} description={description}>
    <Head title={title} icon={<FaQuestion />}>
      <div><p>En savoir plus sur <strong>cadastre.data.gouv.fr</strong>.</p></div>
    </Head>
    <Faq />
  </Page>
)
