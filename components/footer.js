import theme from '../styles/theme'
import Container from './container'

export default () => (
  <footer>
    <Container>
      <div className='logos'>
        <a href='http://www.etalab.gouv.fr' title='Aller sur le blog d’Etalab'>
          <img src='/static/images/logos/etalab.svg' alt='Aller sur le blog d’Etalab' />
        </a>
        <a href='https://www.economie.gouv.fr/dgfip' title='Aller sur le site de la DGFiP'>
          <img src='/static/images/logos/dgfip.png' alt='Aller sur le site de la DGFiP' />
        </a>
      </div>

      <div className='main'>
        <div>
          <h2>cadastre.data.gouv.fr</h2>
          <ul>
            <li><a href='mailto:cadastre@data.gouv.fr'>Contact</a></li>
          </ul>
        </div>

        <div className='social'>
          <img src='/static/images/icons/twitter.svg' alt='Logo twitter' />
          <div>
            <p>Suivez nous sur twitter</p>
            <a href='https://twitter.com/geodatagouv'>@geodatagouv</a>
          </div>
        </div>
      </div>
    </Container>

    <style jsx>{`
      footer {
        background: ${theme.backgroundDark};
        color: ${theme.colors.white};
        padding: 2em 0;
      }

      a,
      a:hover,
      a:visited,
      a:focus,
      a:active {
        color: ${theme.colors.white};
      }

      .logos {
        margin-bottom: 1em;
        display: flex;
        align-items: center;
      }

      .logos img {
        width: 100px;
        height: auto;
      }

      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      li {
        color: ${theme.colors.grey};
        font-size: 1.2em;
        line-height: 1.8em;
      }

      .main {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        align-items: end;
        grid-column-gap: 1em;
      }

      .social {
        margin-top: 1.4em;
      }

      .social div {
        display: inline-block;
        line-height: 1;
      }

      .social p {
        margin: 0;
      }

      .social a {
        color: ${theme.colors.darkGrey};
      }

      .social img {
        height: 2em;
        width: auto;
        margin-right: 10px;
      }

      @media (min-width: 768px) {
        .social {
          margin-top: 0;
          justify-self: end;
        }
      }
    `}</style>
  </footer>
)
