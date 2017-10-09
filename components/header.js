import Link from 'next/link'

import theme from '../styles/theme'

export default () => (
  <nav>
    <Link href='/'>
      <a>
        <img className='logo' src='/static/images/logos/cadastre.svg' alt='Accueil de cadastre.data.gouv.fr' />
      </a>
    </Link>

    <style jsx>{`
      nav {
        box-shadow: 0 1px 4px ${theme.boxShadow};
        width: 100%;
        background: #fff;
        z-index: 100;
        padding: 1em;
      }

      img {
        height: 40px;
      }

      a {
        display: flex;
      }
    `}</style>
  </nav>
)
