import React from 'react'
import {Map} from 'react-feather'
import Page from '../../layouts/main.js'
import Head from '../../components/head.js'
import Pci from '../../components/pci.js'

const title = 'Plan Cadastral Informatisé (PCI)'
const description = 'Données de référence pour la France entière produites par la Direction Générale des Finances Publiques.'

const PlanCadastralInformatise = () => (
  <Page title={title} description={description}>
    <Head title={title} icon={<span className='feather-icon'><Map /></span>}>
      Données de référence pour la France entière (hors Strasbourg), produites par la Direction Générale des Finances Publiques.
    </Head>
    <Pci />
  </Page>
)

export default PlanCadastralInformatise
