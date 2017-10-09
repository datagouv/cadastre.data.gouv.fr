import Head from 'next/head'

import theme from '../styles/theme'

import Fonts from './styles/fonts'

export default () => (
  <div>
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='x-ua-compatible' content='ie=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />

      <title>Données cadastrales ouvertes - cadastre.data.gouv.fr</title>

      <link rel='icon' href='/static/favicon.ico' />

      {/* Search Engine */}
      <meta name='description' content='Consulter, télécharger et intégrer les données cadastrales sans effort' />
      <meta name='image' content='https://cadastre.data.gouv.fr/static/images/previews/default.png' />

      {/* Schema.org for Google */}
      <meta itemProp='name' content='Données cadastrales ouvertes' />
      <meta itemProp='description' content='Consulter, télécharger et intégrer les données cadastrales sans effort' />
      <meta itemProp='image' content='https://cadastre.data.gouv.fr/static/images/previews/default.png' />

      {/* Twitter */}
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content='Données cadastrales ouvertes' />
      <meta name='twitter:description' content='Consulter, télécharger et intégrer les données cadastrales sans effort' />
      <meta name='twitter:site' content='@geodatagouv' />
      <meta name='twitter:creator' content='geodatagouv' />
      <meta name='twitter:image:src' content='https://cadastre.data.gouv.fr/static/images/previews/default.png' />

      {/* Open Graph general (Facebook, Pinterest & Google+) */}
      <meta name='og:title' content='Données cadastrales ouvertes' />
      <meta name='og:description' content='Consulter, télécharger et intégrer les données cadastrales sans effort' />
      <meta name='og:image' content='https://cadastre.data.gouv.fr/static/images/previews/facebook.png' />
      <meta name='og:url' content='https://cadastre.data.gouv.fr/' />
      <meta name='og:site_name' content='Données cadastrales ouvertes' />
      <meta name='og:locale' content='fr_FR' />
      <meta name='og:type' content='website' />
    </Head>

    <Fonts />

    <style jsx global>{`
      * {
        box-sizing: border-box;
      }

      body {
        padding: 0;
        margin: 0;
        position: relative;
        overflow: auto;
        font-family: 'Source Sans Pro', Arial, sans-serif;
        font-size: 15px;
        background: ${theme.backgroundGrey};
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: 'Evolventa', 'Trebuchet MS', sans-serif;
      }

      a,
      button {
        outline: none;
      }

      a,
      a:hover,
      a:focus,
      a:visited,
      a:active {
        color: ${theme.primary};
        text-decoration: none;
      }
    `}</style>
  </div>
)
