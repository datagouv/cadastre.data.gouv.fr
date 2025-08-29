import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__logo'>
          <img src='/static/images/logos/cadastre.data.gouv.fr.svg' alt='cadastre.data.gouv.fr' />

        </div>
        <ul className='footer__links'>
          <li><p><b>Un produit de la Direction Interministérielle du Numérique (DINUM).</b></p></li>
          <li><Link href='/mentions-legales'><a>Mentions légales</a></Link></li>
          <li><Link href='/faq'><a>FAQ</a></Link></li>
          <li><a href='https://www.data.gouv.fr/support/help/dataset/cadastre/#support-tree'>Contact</a></li>
        </ul>
      </div>
      <style jsx>{`
        .footer {
          border-top: 2px solid var(--theme-primary);
          margin-top: 2em;
          padding-top: 1.5em;
        }
      `}</style>
    </footer>
  )
}

export default Footer