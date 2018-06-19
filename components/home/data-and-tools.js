/* eslint-disable react/jsx-child-element-spacing */
import Section from '../section'

import theme from '../../styles/theme'

export default () => (
  <Section title='Données et outils disponibles'>
    <div className='main'>
      <div>
        <a target='_blank' rel='noopener noreferrer' href='https://www.data.gouv.fr/fr/datasets/58e5924b88ee3802ca255566/'>
          <img src='/static/images/icons/download.svg' alt='Données PCI Vecteur' />
          Données PCI Vecteur
        </a>
        <i>DGFiP</i>
      </div>
      <div>
        <a target='_blank'rel='noopener noreferrer' href='https://www.data.gouv.fr/fr/datasets/59b0020ec751df07d5f13bcf/'>
          <img src='/static/images/icons/download.svg' alt='Données Cadastre simplifié' />
          Données Cadastre simplifié
        </a>
        <i>Etalab</i>
      </div>
      <div>
        <span className='muted'>
          <img src='/static/images/icons/search.svg' alt='Consulter le cadastre' />
          Consulter le cadastre
        </span>
        <i>(à venir)</i>
      </div>
      <div>
        <span className='muted'>
          <img src='/static/images/icons/map.svg' alt='Cartographie interactive' />
          Cartographie interactive
        </span>
        <i>(à venir)</i>
      </div>
    </div>

    <style jsx>{`
      .main {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
        grid-gap: 2em 1em;
      }

      .main div {
        text-align: center;
        font-size: 1.2em;
        padding: 0 2em;
      }

      i {
        color: ${theme.colors.grey};
      }

      a, .muted {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-transform: uppercase;
        font-weight: 700;
        color: ${theme.darkText};
      }

      img {
        height: 100px;
        width: auto;
        margin-bottom: 15px;
      }

      .muted {
        opacity: 0.4;
      }
    `}</style>
  </Section>
)
