import Page from '../layouts/main'
import Hero from '../components/hero'

import Usages from '../components/home/usages'
import Explaination from '../components/home/explaination'
import OpenData from '../components/home/opendata'
import Subscribe from '../components/home/subscribe'
import OtherSites from '../components/home/other-sites'
import Section from '../components/section'

const title = 'Données cadastrales ouvertes'
const tagline = 'Consulter, télécharger et intégrer facilement les données cadastrales'

export default () => (
  <Page title={title} description={tagline}>
    <Hero
      title={title}
      tagline={tagline}
    />

    <Section>
      <div className='row'>
        <Explaination />
        <OpenData />
      </div>
    </Section>

    <Usages />
    <Subscribe />
    <OtherSites />
  </Page>
)
