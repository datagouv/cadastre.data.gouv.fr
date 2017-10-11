import theme from '../../styles/theme'

export default () => (
  <div>
    <img src='/static/images/icons/twitter.svg' alt='Logo twitter' />
    <div className='link'>
      Suivez nous sur twitter
      <a href='https://twitter.com/geodatagouv'>@geodatagouv</a>
    </div>

    <style jsx>{`
      div {
        text-align: right;
        margin-top: 1.4em;
      }

      .link {
        display: inline-block;
        line-height: 1;
      }

      a {
        color: ${theme.colors.darkGrey};
        display: block;
      }

      img {
        height: 2em;
        width: auto;
        margin-right: 10px;
      }

      @media (min-width: 768px) {
        div {
          margin-top: 0;
        }
      }
    `}</style>
  </div>
)
