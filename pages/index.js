import Page from '../layouts/main'
import Hero from '../components/hero'

import Usages from '../components/home/usages'
import Explaination from '../components/home/explaination'
import OpenData from '../components/home/opendata'
import Subscribe from '../components/home/subscribe'
import OtherSites from '../components/home/other-sites'

export default () => (
  <Page>
    <Hero
      title='Données cadastrales ouvertes'
      tagline='Consulter, télécharger et intégrer facilement les données cadastrales' />

    <Explaination />
    <OpenData />
    <Usages />
    <Subscribe />
    <OtherSites />
  </Page>
)
