import ThIcon from 'react-icons/lib/fa/th'
import Page from '../../layouts/main'

import Head from '../../components/head'
import Pci from '../../components/pci'

const title = 'Plan Cadastral Informatisé (PCI)'
const description = 'Le plan cadastral est le découpage du territoire français en unités de surfaces permettant le calcul de certains impôts (notamment la taxe foncière, la taxe d’habitation et la cotisation foncière des entreprises). La consultation du cadastre peut se faire en ligne sur cadastre.gouv.fr'

export default () => (
  <Page title={title} description={description}>
    <Head title={title} icon={<ThIcon />}>
      Le plan cadastral est le découpage du territoire français en unités de surfaces permettant le calcul de certains impôts (notamment la taxe foncière, la taxe d’habitation et la cotisation foncière des entreprises). La consultation du cadastre peut se faire en ligne sur <a href='https://cadastre.gouv.fr' rel='nofollow'>cadastre.gouv.fr</a>.
    </Head>
    <Pci />
    <style jsx>{`
      a {
        color: #fff;
        text-decoration: underline;
        font-weight: 600;
      }
      `}</style>
  </Page>
)
