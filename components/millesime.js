import PropTypes from 'prop-types'

import theme from '../styles/theme'

const formatLabels = {
  tiff: 'Format TIFF (PCI Image)',
  edigeo: 'Format EDIGÉO',
  'edigeo-cc': 'Format EDIGÉO (CC 9 zones)',
  dxf: 'Format DXF-PCI',
  'dxf-cc': 'Format DXF-PCI (CC 9 zones)',
  geojson: 'Format GeoJSON',
  shp: 'Format Shapefile'
}

const granularityLabels = {
  feuilles: 'par feuille',
  departements: 'par département',
  communes: 'par commune',
  france: 'France entière'
}

const Millesime = ({date, formats, granularities, path, getUrl}) => (
  <div className='millesime-container'>
    <h5>Millésime {date}</h5>
    <div className='millesimes'>
      {formats.map(format => (
        <div key={date + format} className='format'>
          <div><strong>{formatLabels[format]}</strong></div>
          <div className='granularity'>
            {granularities.map(granularity => (
              <a key={date + format + granularity} href={getUrl(path, format, granularity)}>{granularityLabels[granularity]}</a>
            ))}
          </div>
        </div>
      ))}
    </div>
    <style jsx>{`
      .millesime-container {
        background: ${theme.colors.white};
        box-shadow: 0 1px 4px ${theme.boxShadow};
      }

      .millesime-container h5 {
        margin: 0;
        padding: 1em;
        text-align: center;
        background: ${theme.backgroundColor};
        color: ${theme.colors.white};
      }

      .millesimes {
      }

      .format {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 1em;
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
  granularities: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
  getUrl: PropTypes.func.isRequired
}

export default Millesime
