import Container from '../container'

import theme from '../../styles/theme'

import Logos from './logos'
import Sitemap from './sitemap'

export default () => (
  <footer>
    <Container>
      <div>
        <Sitemap />
        <Logos />
      </div>
    </Container>

    <style jsx>{`
      footer {
        background: ${theme.backgroundDark};
        color: ${theme.colors.white};
        padding: 2em 0;
      }

      @media (min-width: 768px) {
        div {
          display: flex;
          flex-wrap: wrap;
          align-items: start;
          justify-content: space-between;
        }
      }
    `}</style>
  </footer>
)
