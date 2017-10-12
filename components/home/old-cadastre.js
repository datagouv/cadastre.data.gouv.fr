import Section from '../section'

import theme from '../../styles/theme'

export default () => (
  <Section
    background='color'
    subtitle='Pour consulter le plan cadastral et acheter des tirages papier, vous pouvez vous rendre sur :'
    centered>
    <a href='https://cadastre.gouv.fr'>
      <span>cadastre.gouv.fr</span>
    </a>

    <style jsx>{`
      a {
        color: ${theme.colors.white};
        font-size: 2em;
        font-style: italic;
      }

      span {
        border-bottom: 2px solid ${theme.colors.white};
        padding-bottom: 1px;
      }
    `}</style>
  </Section>
)
