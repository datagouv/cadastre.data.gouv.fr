import React from 'react'
import Section from '../section'

function Usages() {
  return (
    <Section title='Réutilisations possibles' background='dark' centered>
      <div className='row' style={{textAlign: 'center'}}>
        <div>
          <h4>Collectivités</h4>
          <p>Télécharger et consulter le plan cadastral de ma commune</p>
        </div>
        <div>
          <h4>Géomaticiens</h4>
          <p>Construire des zonages basés sur des données parcellaires</p>
        </div>
        <div>
          <h4>Professionnels de l’aménagement</h4>
          <p>Disposer de l’emprise au sol des bâtiments</p>
        </div>
        <div>
          <h4>Développeurs</h4>
          <p>Intégrer les références cadastrales dans les applications ou les formulaires en ligne</p>
        </div>
      </div>
    </Section>
  )
}

export default Usages
