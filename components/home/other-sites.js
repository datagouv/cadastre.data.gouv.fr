import Section from '../section'
import Button from '../button-link'

export default () => (
  <Section title='Nos autres sites' subtitle='Visiter les autres sites de la galaxie géo d’Etalab'>
    <div className='main'>
      <div>
        <p>Catalogue des données géographiques</p>
        <Button href='https://inspire.data.gouv.fr'>
          inspire.data.gouv.fr
        </Button>
      </div>
      <div>
        <p>API géographiques pour les développeurs</p>
        <Button href='https://geo.api.gouv.fr'>
          geo.api.gouv.fr
        </Button>
      </div>
      <div>
        <p>Données Adresse en libre accès</p>
        <Button href='https://adresse.data.gouv.fr'>
          adresse.data.gouv.fr
        </Button>
      </div>
    </div>

    <style jsx>{`
      .main {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
        grid-row-gap: 0.6em;
        text-align: center;
      }
    `}</style>
  </Section>
)
