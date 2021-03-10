import React from 'react'

import theme from '../styles/theme'

function IncendieOvh() {
  return (
    <div>
      <div className='incendie-ovh'>
        <div className='intro'>
          <h4>Incident en cours</h4>
          <div>
            <b>Plusieurs de nos outils et services sont actuellement injoignables en raison d’un incendie majeur chez notre hébergeur.
              Nous travaillons à rétablir nos services par ordre de priorité.</b>
          </div>
        </div>
        <ul>
          <li>
            <b>Mise à jour 10/03/2021 à 8h50 :</b> Actuellement nous pouvons dire que le service de fonds de carte est touché.
          </li>
          <li>
            <b>Mise à jour 10/03/2021 à 14h05 :</b> Le fond de carte photographies aériennes est à nouveau disponible.
          </li>
        </ul>
      </div>

      <style jsx>{`
      .incendie-ovh {
        font-size: 19px;
        padding: 1em;
        color: ${theme.colors.almostBlack};
        background-color: ${theme.colors.lighterBlue};
      }

      ul {
        margin-top: 2em;
        font-size: medium;
      }

      .intro {
        text-align: center;
      }
    `}</style>
    </div>
  )
}

export default IncendieOvh
