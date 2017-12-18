import PropTypes from 'prop-types'

import theme from '../styles/theme'

const Ressource = ({title, lastModification, format, link}) => (
  <div className='container'>
    <a className='ressource' href={link}>
      <div className='overlay'>
        <div>
          <div>Télécharger</div>
          <img src='../static/images/icons/download.svg' />
        </div>
      </div>
      <div>
        <div className='description'>
          <h4>{title}</h4>
          <p>{lastModification}</p>
        </div>
        <div className='format'><strong>{format}</strong></div>
      </div>
    </a>
    <style jsx>{`
      .container {
        position: relative;
        background: ${theme.backgroundWhite};
        border: 1px solid ${theme.borderLighter};
        box-shadow: 0 1px 4px 0 ${theme.boxShadow};
      }

      .container:hover .overlay {
        opacity: 1;
      }

      .ressource {
        text-align: center;
      }

      a.ressource {
        color: ${theme.darkText};
      }

      .overlay {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        text-align: center;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: .5s ease;
        background-color: ${theme.colors.white};
      }

      .overlay img {
        width: 50px;
        margin: 10px 0;
      }

      .description {
        padding: 1em;
      }

      .format {
        text-align: center;
        padding: 0.3em 0;
        background: ${theme.primary};
        color: ${theme.colors.white};
        box-shadow: 0 1px 4px 0 ${theme.boxShadow};
        text-transform: uppercase;
      }
    `}</style>
  </div>
)

Ressource.propTypes = {
  title: PropTypes.string.isRequired,
  lastModification: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default Ressource
