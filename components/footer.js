import React from 'react'
import Link from 'next/link'

const Footer = () => (
  <footer className='footer'>
    <div className='container'>
      <div className='footer__logo'>
        <img src='/static/images/logos/etalab.svg' />
        <ul className='footer__social'>
          <li><Link href='https://twitter.com/geodatagouv'><a><img src='/static/images/medias/twitter.svg' alt='Twitter' /></a></Link></li>
          <li><Link href='https://github.com/etalab/cadastre.data.gouv.fr'><a><img src='/static/images/medias/github.svg' alt='Github' /></a></Link></li>
          <li><Link href='https://blog.geo.data.gouv.fr'><a><img src='/static/images/medias/medium.svg' alt='Medium' /></a></Link></li>
          <li><a href='mailto:cadastre@data.gouv.fr'><img src='/static/images/medias/envelop.svg' alt='Contact' /></a></li>
        </ul>
      </div>
      <ul className='footer__links'>
        <li><h2>cadastre.data.gouv.fr</h2></li>
        <li><Link href='/mentions-legales'><a>Mentions légales</a></Link></li>
        <li><Link href='/faq'><a>FAQ</a></Link></li>
        <li><a href='mailto:cadastre@data.gouv.fr'>Contact</a></li>
      </ul>
    </div>
    <style jsx>{`
      .footer__social img {
        width: 25px;
      }
      `}</style>
  </footer>
)

export default Footer
