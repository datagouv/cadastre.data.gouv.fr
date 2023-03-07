import React from 'react'
import Section from '../section'

function OtherSites() {
  return (
    <Section title='Voir aussi' subtitle=''>
      <div className='main'>
        <div>
          <a href='https://adresse.data.gouv.fr'>
            <img src='/static/images/logos/logo-adresse.svg' />
          </a>
        </div>
        <div>
          <a href='https://geo.api.gouv.fr'>
            <img src='/static/images/logos/geo.api.gouv.fr.svg' />
          </a>
        </div>
      </div>
      <div className='centered'>
        <p>Catalogues des données géographiques</p>
      </div>

      <style jsx>{`
    .main {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
      grid-row-gap: 0.6em;
      text-align: center;
    }

    .centered {
      text-align: center;
    }

    img {
      width: 300px;
    }
  `}</style>
    </Section>
  )
}

export default OtherSites
