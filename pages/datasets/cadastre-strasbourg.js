import MapIcon from 'react-icons/lib/fa/flask'
import Page from '../../layouts/main'

import Head from '../../components/head'
import CadastreStrasbourg from '../../components/cadastre-strasbourg'

const title = 'Données cadastrales Eurométropole de Strasbourg'
const description = 'L’Eurométropole de Strasbourg est une métropole française située dans le département du Bas-Rhin. Elle fait partie du pôle métropolitain Strasbourg-Mulhouse-Colmar qui fédère les grandes intercommunalités alsaciennes.'

export default () => (
  <Page title={title} description={description}>
    <Head title={title} icon={<MapIcon />}>
      <div>
        <p>{description}</p>
        <p>Créée le 4 décembre 1967 sous le nom de communauté urbaine de Strasbourg (CUS), elle devient une métropole le 1er janvier 2015.</p>
      </div>
    </Head>
    <CadastreStrasbourg />
  </Page>
)
