import Section from '../section'

import theme from '../../styles/theme'

export default () => (
  <Section background='grey' subtitle='Pour consulter le plan cadastral et acheter des tirages papier, vous pouvez vous rendre sur :'>
    <div className='main'>
      <a href='https://cadastre.gouv.fr'>
        <span>cadastre.gouv.fr</span>
      </a>
    </div>

    <style jsx>{`
      .main {
        text-align: center;
      }

      a {
        font-size: 2em;
        font-style: italic;
        color: ${theme.darkText};
      }

      span {
        border-bottom: 2px solid ${theme.darkText};
        padding-bottom: 1px;
      }
    `}</style>
  </Section>
)
