import Section from '../section'

import theme from '../../styles/theme'

export default () => (
  <Section title='Utilisations possibles' background='dark' centered>
    <div className='main'>
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
        <p>Intégrer les références cadastrales dans les applications</p>
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
          grid-template-columns: repeat(4, 1fr);
        }

        .main div {
          padding: 0 2em;
        }

        .main div:not(:last-child) {
          border-right: 1px solid ${theme.themeBorderLighter};
        }
      }
    `}</style>
  </Section>
)
