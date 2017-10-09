import Section from '../section'

import theme from '../../styles/theme'

export default () => (
  <Section background='color' subtitle='Pour consulter le plan cadastral et acheter des tirages papier, vous pouvez vous rendre sur :'>
    <a href='https://cadastre.gouv.fr'>
      <span>cadastre.gouv.fr</span>
    </a>

    <style jsx>{`
      a {
        display: block;
        text-align: center;
        color: ${theme.colors.white};
        font-size: 2em;
        font-style: oblique;
      }

      span {
        border-bottom: 2px solid ${theme.colors.white};
        padding-bottom: 1px;
      }
    `}</style>
  </Section>
)
