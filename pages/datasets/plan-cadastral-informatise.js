import React from 'react'
import MapO from 'react-icons/lib/fa/map-o'
import Page from '../../layouts/main'

import Head from '../../components/head'
import Pci from '../../components/pci'

const title = 'Plan Cadastral Informatisé (PCI)'
const description = 'Données de référence pour la France entière produites par la Direction Générale des Finances Publiques.'

export default () => (
  <Page title={title} description={description}>
    <Head title={title} icon={<MapO />}>
      Données de référence pour la France entière (hors Strasbourg), produites par la Direction Générale des Finances Publiques.
    </Head>
    <Pci />
  </Page>
)
