import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__logo'>
          <img src='/static/images/logos/etalab.svg' />
          <ul className='footer__social'>
            <li><Link href='https://twitter.com/datagouvfr'><img src='/static/images/medias/twitter.svg' alt='Twitter' /></Link></li>
            <li><Link href='https://github.com/datagouv/cadastre.data.gouv.fr'><img src='/static/images/medias/github.svg' alt='Github' /></Link></li>
            <li><Link href='https://medium.com/geo-data-gouv-fr'><img src='/static/images/medias/medium.svg' alt='Medium' /></Link></li>
            <li><a href='mailto:cadastre@data.gouv.fr'><img src='/static/images/medias/envelop.svg' alt='Contact' /></a></li>
          </ul>
        </div>
        <ul className='footer__links'>
          <li><h2>cadastre.data.gouv.fr</h2></li>
          <li><Link href='/mentions-legales'>Mentions légales</Link></li>
          <li><Link href='/faq'>FAQ</Link></li>
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
}

export default Footer
