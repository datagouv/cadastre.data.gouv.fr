import React from 'react'
import Link from 'next/link'

import HamburgerMenu from './hamburger-menu'

const links = [
  {text: 'Données cadastrales', href: '/datasets'},
  {text: 'Carte', href: '/map'},
  {text: 'DVF', href: '/dvf'},
  {text: 'FAQ', href: '/faq'}
]

function Header() {
  return (
    <header className='navbar' role='navigation'>
      <div className='navbar__container'>

        <Link href='/'>
          <a className='nav__link'>
            <img className='nav__logo' src='/static/images/logos/cadastre.data.gouv.fr.svg' alt='Page d’accueil de cadastre.data.gouv.fr' />
          </a>
        </Link>

        <nav>
          <ul className='nav__links'>
            {links.map(link => (
              <li key={link.text} className='nav__item'>
                <Link href={link.href}><a>{link.text}</a></Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className='hamburger-menu'>
          <HamburgerMenu links={links} />
        </div>

      </div>
      <style jsx>{`
    .navbar__container {
      flex-flow: nowrap;
      align-items: center;
    }

    .navbar__home:hover {
      background: none;
    }

    .hamburger-menu {
      display: none;
    }

    .nav__logo {
      height: 38px;
    }

    @media (max-width: 800px) {
      nav {
        display: none;
      }

      .hamburger-menu {
        display: block;
        margin: 0 1em;
      }
    }

    @media (max-width: 380px) {
      .nav__logo {
        height: 28px;
      }
    }
  `}</style>
    </header>
  )
}

export default Header
