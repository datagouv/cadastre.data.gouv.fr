import PropTypes from 'prop-types'

import theme from '../styles/theme'

const formatLabels = {
  tiff: 'Format TIFF (PCI Image)',
  edigeo: 'Format EDIGÉO',
  dxf: 'Format DXF-PCI',
  geojson: 'Format GEOJSON'
}

const Millesime = ({date, formats, path, getUrl}) => (
  <div className='container'>
    <h5>Millésime {date}</h5>
    <div className='millesimes'>
      {formats.map(format => (
        <div key={date + format} className='format'>
          <div><strong>{formatLabels[format]}</strong></div>
          <div className='granularity'>
            <a href={getUrl(path, format, 'departements')}>par départements</a>
            <a href={getUrl(path, format, 'feuilles')}>par feuilles</a></div>
        </div>
      ))}
    </div>
    <style jsx>{`
      .container {
        background: ${theme.colors.white};
        box-shadow: 0 1px 4px ${theme.boxShadow};
      }

      .container h5 {
        margin: 0;
        padding: 1em;
        text-align: center;
        background: ${theme.backgroundColor};
        color: ${theme.colors.white};
      }

      .millesimes {
      }

      .format {
        display: flex;
        justify-content: space-between;
        flex-flow: wrap;
        align-items: center;
        padding: 0.8em;
      }

      .format:nth-child(2) {
        background: whitesmoke;
      }

      .granularity {
        display: flex;
        flex-direction: column;
      }

      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </div>
)

Millesime.propTypes = {
  date: PropTypes.string.isRequired,
  formats: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
  getUrl: PropTypes.func.isRequired
}

export default Millesime
