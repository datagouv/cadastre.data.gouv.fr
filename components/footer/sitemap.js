import theme from '../../styles/theme'

export default () => (
  <div>
    <h2>cadastre.data.gouv.fr</h2>
    <ul>
      <li>
        <a href='mailto:cadastre@data.gouv.fr'>
          <img src='/static/images/icons/email.svg' alt='Envoyez-nous un email' />
          Contactez-nous
        </a>
      </li>
      <li>
        <a href='https://twitter.com/geodatagouv'>
          <img src='/static/images/icons/twitter.svg' alt='Suivez-nous sur twitter' />
          geodatagouv
        </a>
      </li>
    </ul>

    <style jsx>{`
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      li {
        color: ${theme.colors.grey};
        font-size: 1.2em;
        line-height: 1.8em;
      }

      a {
        color: ${theme.colors.white};
      }

      img {
        display: inline-block;
        vertical-align: -2px;
        width: 1.2em;
        height: auto;
        margin-right: 0.4em;
      }

      @media (max-width: 768px) {
        text-align: center;
      }
    `}</style>
  </div>
)
