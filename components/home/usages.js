import React from 'react'
import Section from '../section'

function Usages() {
  return (
    <Section title='Réutilisations possibles' background='grey' centered>
      <div className='row usages'>
        <div className='usage-block'>
          <h4>Collectivités</h4>
          <p>Télécharger et consulter le plan cadastral de ma commune</p>
        </div>
        <div className='usage-block'>
          <h4>Géomaticiens</h4>
          <p>Construire des zonages basés sur des données parcellaires</p>
        </div>
        <div className='usage-block'>
          <h4>Professionnels de l’aménagement</h4>
          <p>Disposer de l’emprise au sol des bâtiments</p>
        </div>
        <div className='usage-block'>
          <h4>Développeurs</h4>
          <p>Intégrer les références cadastrales dans les applications ou les formulaires en ligne</p>
        </div>
      </div>
      <style jsx>{`
        .usages {
          text-align: center;
        }
        .usage-block {
          flex: 1;
          margin: 0 2em;
          min-width: 200px;
        }
      `}</style>
    </Section>
  )
}

export default Usages
