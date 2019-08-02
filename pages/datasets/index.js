import React from 'react'
import DownloadIcon from 'react-icons/lib/fa/download'
import Page from '../../layouts/main'

import Head from '../../components/head'
import Datasets from '../../components/datasets'

const title = 'Télécharger les données'
const description = 'Plusieurs jeux de données sont mis à disposition sous Licence Ouverte.'

export default () => (
  <Page title={title} description={description}>
    <Head title={title} icon={<DownloadIcon />}>
      {description}
    </Head>
    <Datasets />
  </Page>
)
