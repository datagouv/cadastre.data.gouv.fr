import React from 'react'
import Section from '../section.js'

const OtherSites = () => (
  <Section title='Voir aussi' subtitle=''>
    <div className='main'>
      <div>
        <a href='https://adresse.data.gouv.fr'>
          <h3>La Base Adresse Nationale</h3>
        </a>
      </div>
      <div>
        <a href='https://geo.api.gouv.fr'>
          <h3>L&apos;Api découpage administratif</h3>
        </a>
      </div>
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

export default OtherSites
