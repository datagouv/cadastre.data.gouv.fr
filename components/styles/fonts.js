import React from 'react'

function Fonts() {
  return (
    <style jsx global>{`
  /* Marianne self-hosted */
  @font-face {
    font-family: 'Marianne';
    font-weight: 300;
    font-style: normal;
    font-display: swap;
    src:
      url('/static/fonts/Marianne/Marianne-Light.woff2') format('woff2'),
      url('/static/fonts/Marianne/Marianne-Light.woff') format('woff');
  }

  @font-face {
    font-family: 'Marianne';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src:
      url('/static/fonts/Marianne/Marianne-Regular.woff2') format('woff2'),
      url('/static/fonts/Marianne/Marianne-Regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Marianne';
    font-weight: 500;
    font-style: normal;
    font-display: swap;
    src:
      url('/static/fonts/Marianne/Marianne-Medium.woff2') format('woff2'),
      url('/static/fonts/Marianne/Marianne-Medium.woff') format('woff');
  }

  @font-face {
    font-family: 'Marianne';
    font-weight: 700;
    font-style: normal;
    font-display: swap;
    src:
      url('/static/fonts/Marianne/Marianne-Bold.woff2') format('woff2'),
      url('/static/fonts/Marianne/Marianne-Bold.woff') format('woff');
  }

  /* Application globale */
  :root, html, body {
    font-family: 'Marianne', Arial, sans-serif;
  }
`}</style>
  )
}

export default Fonts
