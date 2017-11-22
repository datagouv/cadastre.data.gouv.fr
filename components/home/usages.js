import Section from '../section'

import theme from '../../styles/theme'

export default () => (
  <Section title='Applications possibles' background='dark' centered>
    <div className='main'>
      <div>
        Rechercher des références cadastrales : parcelles, feuilles, sections
      </div>
      <div>
        Travailler avec les emprises au sol des bâtiments
      </div>
      <div>
        Construire des zonages basés sur le découpage parcellaire
      </div>
    </div>

    <style jsx>{`
      .main {
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: 0.6em;
      }

      .main div {
        text-align: center;
        color: ${theme.themeDarkText};
        font-size: 1.2em;
        font-style: italic;
      }

      @media (min-width: 768px) {
        .main {
          grid-template-columns: repeat(3, 1fr);
        }

        .main div {
          padding: 0 3em;
        }

        .main div:not(:last-child) {
          border-right: 1px solid ${theme.themeBorderLighter};
        }
      }
    `}</style>
  </Section>
)
