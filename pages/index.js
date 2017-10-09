import Page from '../layouts/main'
import Hero from '../components/hero'

import Usages from '../components/home/usages'
import DataAndTools from '../components/home/data-and-tools'
import Subscribe from '../components/home/subscribe'
import OtherSites from '../components/home/other-sites'
import OldCadastre from '../components/home/old-cadastre'

export default () => (
  <Page>
    <Hero
      title='Données cadastrales ouvertes'
      tagline='Consulter, télécharger et intégrer les données cadastrales sans effort' />

    <Usages />
    <DataAndTools />
    <Subscribe />
    <OtherSites />
    <OldCadastre />
  </Page>
)
