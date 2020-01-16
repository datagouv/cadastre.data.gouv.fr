import React from 'react'
import PropTypes from 'prop-types'

import Mapbox from '../mapbox'

import CadastreMap from './cadastre-map'

const Map = ({center, zoom}) => {
  return (
    <div>

      <div className='map-container'>
        <Mapbox
          defaultZoom={zoom}
          defaultCenter={center}
          hasSwitchStyle
        >
          {({...mapboxProps}) => (
            <CadastreMap
              {...mapboxProps}
              zoom={zoom}
              center={center}
            />
          )}
        </Mapbox>
      </div>

      <style jsx>{`
        .map-container {
          width: 100%;
          position: relative;
          height: calc(100vh - 78px);
        }

        @media (max-width: 700px) {
          .map-container {
            width: 100%;
            position: relative;
            height: calc(100vh - 134px);
            top: 56px;
          }
        }
      `}</style>
    </div>
  )
}

Map.defaultProps = {
  center: null,
  zoom: null
}

Map.propTypes = {
  center: PropTypes.array,
  zoom: PropTypes.number
}

export default Map
