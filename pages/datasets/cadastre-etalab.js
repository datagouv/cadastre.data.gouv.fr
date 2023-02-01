import React from 'react'
import {Maximize} from 'react-feather'
import Page from '../../layouts/main'

import Head from '../../components/head'
import CadastreEtalab from '../../components/cadastre-etalab'

const title = 'Cadastre Etalab'
const description = 'Données consolidées pour la France entière, produites par Etalab à partir des données de référence.'

const CadastreEtalabComponent = () => <Page title={title} description={description}>
  <Head title={title} icon={<span className='feather-icon'><Maximize /></span>}>
    {description}
  </Head>
  <CadastreEtalab />
</Page>;

export default CadastreEtalabComponent;
