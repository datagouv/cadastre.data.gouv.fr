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
      body {
        padding: 0;
        margin: 0;
        position: relative;
        overflow: auto;
        background: ${theme.backgroundGrey};
      }

      a,
      button {
        outline: none;
        cursor: pointer;
      }

      a,
      a:hover,
      a:focus,
      a:visited,
      a:active {
        color: ${theme.primary};
        text-decoration: none;
        transition: color 0.2s ease-out;
      }

      @custom-media --smaller-than-mobile (max-width: 399px);
      @custom-media --larger-than-mobile (min-width: 400px);

      @custom-media --smaller-than-phablet (max-width: 549px);
      @custom-media --larger-than-phablet (min-width: 550px);

      @custom-media --smaller-than-tablet (max-width: 749px);
      @custom-media --larger-than-tablet (min-width: 750px);

      @custom-media --smaller-than-desktop (max-width: 999px);
      @custom-media --larger-than-desktop (min-width: 1000px);

      body {
        font-family: "Source Sans Pro", Arial, sans-serif;
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: "Evolventa", "Trebuchet MS", sans-serif;
      }

      h1 {
        font-size: 2em;
      }

      h2 {
        font-size: 1.5em;
      }

      h3 {
        font-size: 1.25em;
      }

      h4 {
        font-size: 1em;
      }

      .subtitle {
        color: var(--dark-grey);
      }
    `}</style>
  </div>
)
