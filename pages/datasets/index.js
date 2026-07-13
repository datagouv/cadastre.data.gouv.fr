import React from 'react'
import {Download} from 'react-feather'
import Page from '../../layouts/main.js'
import Head from '../../components/head.js'
import Datasets from '../../components/datasets.js'

const title = 'Télécharger les données'
const description = 'Plusieurs jeux de données sont mis à disposition sous Licence Ouverte.'

const Index = () => (
  <Page title={title} description={description}>
    <Head title={title} icon={<span className='feather-icon'><Download /></span>}>
      {description}
    </Head>
    <Datasets />
  </Page>
)

export default Index
