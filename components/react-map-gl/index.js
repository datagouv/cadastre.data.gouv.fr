import React, {useState, useEffect, useCallback} from 'react'
import PropTypes from 'prop-types'
import Map, {NavigationControl, GeolocateControl, Popup} from 'react-map-gl'
import maplibregl from "maplibre-gl"

// import 'maplibre-gl/dist/maplibre-gl.css';

import {Home} from 'react-feather'

import usePrevious from '../hooks/previous'

import ParcelleSumup from '../map/parcelle-sumup'
// import Control from './control'
// import SwitchMapStyle from './switch-map-style'

import {vector, ortho} from './styles'

const interactiveLayerIds = ['parcelles-fill']
const settings = {
  maxZoom: 19
}

function getBaseStyle(style) {
  switch (style) {
    case 'ortho':
      return ortho

    case 'vector':
      return vector

    default:
      return vector
  }
}

const MapComponent = ({viewport, isTouchScreenDevice, showBati, toggleBati, style, changeStyle, onViewportChange, selectedParcelle, selectParcelle}) => {
  const [map, setMap] = useState()

  const [isLoaded, setIsLoaded] = useState(false)
  const [mapStyle, setMapStyle] = useState(getBaseStyle(style))
  const [hovered, setHovered] = useState(null)

  const prevHovered = usePrevious(hovered)

  const mapRef = useCallback(ref => {
    if (ref) {
      setMap(ref.getMap())
    }
  }, [])

  const onClick = useCallback(event => {
    event.originalEvent.stopPropagation()
    console.log(event)
    const feature = event.features && event.features[0]
    const {id} = selectedParcelle || {}

    if (feature && (id !== feature.properties.id)) {
      selectParcelle({...feature.properties})
    } else {
      selectParcelle(null)
    }
  }, [selectParcelle, selectedParcelle])

  const onHover = event => {
    event.originalEvent.stopPropagation()
    console.log(event)
    const feature = event.features && event.features[0]
    const [longitude, latitude] = event.lngLat
    let hoverInfo

    if (feature) {
      hoverInfo = {
        longitude,
        latitude,
        feature
      }
    }

    setHovered(hoverInfo)
  }

  const loadLayers = useCallback(() => {
    const {id} = selectedParcelle || {}
    map.setFilter('parcelle-highlighted', ['==', 'id', id || ''])
  }, [map, selectedParcelle])

  const onStyleLoad = useCallback(() => {
    const waiting = () => {
      if (map.isStyleLoaded()) {
        loadLayers()
      } else {
        setTimeout(waiting, 200)
      }
    }

    if (map) {
      waiting()
    }
  }, [loadLayers, map])

  const displayPopup = useCallback(() => {
    if (hovered) {
      const {id} = selectedParcelle || {}
      if (id === hovered.feature.properties.id) {
        return false
      }

      return true
    }

    return false
  }, [hovered, selectedParcelle])

  useEffect(() => {
    if (map) {
      if (prevHovered) {
        const {id} = prevHovered.feature
        map.setFeatureState({
          source: 'cadastre',
          sourceLayer: 'parcelles',
          id
        }, {hover: false})
      }

      if (hovered) {
        const {id} = hovered.feature

        map.setFeatureState({
          source: 'cadastre',
          sourceLayer: 'parcelles',
          id
        }, {hover: true})
      }
    }
  }, [hovered]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (map && isLoaded) {
      const {id} = selectedParcelle || {}
      loadLayers()

      if (selectedParcelle) {
        if (id && !selectedParcelle.section) { // To select parcelle with parcelleId url params
          const queryParcelle = map.queryRenderedFeatures({
            layers: ['parcelles'],
            filter: ['==', 'id', id]
          })[0]
          if (queryParcelle) {
            selectParcelle(queryParcelle.properties)
          }
        }
      }
    }
  }, [isLoaded, selectedParcelle, loadLayers]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (map) {
      map.setLayoutProperty('batiments-line', 'visibility', showBati ? 'visible' : 'none')
      map.setLayoutProperty('batiments-fill', 'visibility', showBati ? 'visible' : 'none')
    }
  }, [isLoaded, showBati]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setMapStyle(getBaseStyle(style))
  }, [style])

  useEffect(() => {
    if (isLoaded && map) {
      map.on('styledata', onStyleLoad)

      return () => {
        map.off('styledata', onStyleLoad)
      }
    }
  }, [isLoaded, map, onStyleLoad])

  return (
    <div className='map-container'>
      <Map
        ReuseMaps
        ref={mapRef}
        {...viewport}
        width='100%'
        height='100%'
        mapOptions={{hash: true}}
        onViewportChange={onViewportChange}
        mapStyle={mapStyle}
        {...settings}
        onClick={onClick}
        onHover={isTouchScreenDevice ? null : onHover}
        onLoad={() => setIsLoaded(true)}
        getCursor={({isHovering}) => {
          return isHovering ? 'pointer' : 'default'
        }}
        interactiveLayerIds={interactiveLayerIds}
        mapLib={maplibregl}
      >

        <div className='control navigation'>
          <NavigationControl showCompass={false} />
          <div className='control custom maplibregl-ctrl-group maplibregl-ctrl'>
            <div className='user-location'>
              <GeolocateControl
                label='Géolocaliser'
                positionOptions={{enableHighAccuracy: true}}
                trackUserLocation={false}
              />
            </div>
            {/*
            <Control
              captureClick
              enabled={showBati}
              icon={<Home />}
              enabledHint='Afficher le bâti'
              disabledHint='Cacher le bâti'
              onChange={toggleBati} />
              */}
          </div>
        </div>

        <div className='control style-switch maplibregl-ctrl-group maplibregl-ctrl'>
          {/*<SwitchMapStyle
            captureClick
            isVector={style === 'vector'}
            handleChange={changeStyle}
          />
          */}
        </div>

        {displayPopup() && (
          <div className='popup'>
            <Popup
              longitude={hovered.longitude}
              latitude={hovered.latitude}
              closeButton={false}
              closeOnClick={false}
              onClose={() => setHovered(null)}
              anchor='top'
              offsetTop={20}
            >
              <ParcelleSumup {...hovered.feature.properties} />
            </Popup>
          </div>
        )}
      </Map>

      <style jsx>{`
        .map-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .user-location {
          display: none;
        }

        .control {
          position: absolute;
          margin: 0.5em;
        }

        .control.custom {
          position: relative;
          margin: 0.4em 0;
        }

        .navigation {
          top: 0;
          right: 0;
        }

        .style-switch {
          position: absolute;
          bottom: 0;
          left: 0;
        }

        @media (max-width: 470px) {
          .popup {
            display: none;
          }

          .user-location {
            display: block;
          }
        }
      `}</style>
    </div>
  )
}

MapComponent.defaultProps = {
  selectedParcelle: null,
  isTouchScreenDevice: false
}

MapComponent.propTypes = {
  viewport: PropTypes.shape({
    longitude: PropTypes.number.isRequired,
    latitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired
  }).isRequired,
  isTouchScreenDevice: PropTypes.bool,
  showBati: PropTypes.bool.isRequired,
  toggleBati: PropTypes.func.isRequired,
  style: PropTypes.oneOf(['ortho', 'vector']).isRequired,
  changeStyle: PropTypes.func.isRequired,
  onViewportChange: PropTypes.func.isRequired,
  selectedParcelle: PropTypes.shape({
    id: PropTypes.string,
    section: PropTypes.string
  }),
  selectParcelle: PropTypes.func.isRequired
}

export default MapComponent
