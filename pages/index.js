import Page from '../layouts/main'
import Hero from '../components/hero'

import Usages from '../components/home/usages'
import DataAndTools from '../components/home/data-and-tools'
import Subscribe from '../components/home/subscribe'
import OtherSites from '../components/home/other-sites'

export default () => (
  <Page>
    <Hero
      title='Données cadastrales ouvertes'
      tagline='Consulter, télécharger et intégrer facilement les données cadastrales' />

    <Usages />
    <Subscribe />
    <OtherSites />
  </Page>
)
