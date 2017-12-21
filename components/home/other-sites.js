import Section from '../section'

export default () => (
  <Section title='Notre autre site' subtitle=''>
    <div className='main'>
      <div>
        <a href='https://geo.data.gouv.fr'>
          <img src='/static/images/logos/geo.svg' />
        </a>
        <p>Catalogue des données géographiques</p>
      </div>
    </div>

    <style jsx>{`
      .main {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        grid-row-gap: 0.6em;
        text-align: center;
      }

      img {
        width: 300px;
      }
    `}</style>
  </Section>
)
