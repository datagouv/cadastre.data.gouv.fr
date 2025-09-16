import React, {useState, useEffect, useCallback} from 'react'
import PropTypes from 'prop-types'
import {
  Map, NavigationControl, GeolocateControl, Popup,
} from 'react-map-gl'
import maplibregl from 'maplibre-gl'
import {Home} from 'react-feather'
import usePrevious from '../hooks/previous.js'
import ParcelleSumup from '../map/parcelle-sumup.js'
import Control from './control.js'
import SwitchMapStyle from './switch-map-style.js'
import {vector, ortho} from './styles/index.js'

const interactiveLayerIds = ['parcelles-fill']
const settings = {
  maxZoom: 19,
}

function getBaseStyle(style) {
  switch (style) {
    case 'ortho': {
      return ortho
    }

    case 'vector': {
      return vector
    }

    default: {
      return vector
    }
  }
}

const MapComponent = ({viewState, isTouchScreenDevice = false, showBati, toggleBati, style, changeStyle, onMove, selectedParcelle = null, selectParcelle}) => {
  const [map, setMap] = useState()

  const [isLoaded, setIsLoaded] = useState(false)
  const [mapStyle, setMapStyle] = useState(getBaseStyle(style))
  const [hovered, setHovered] = useState(null)
  const [cursor, setCursor] = useState('default')

  const previousHovered = usePrevious(hovered)

  const mapReference = useCallback(reference => {
    if (reference) {
      setMap(reference.getMap())
    }
  }, [])

  const onClick = useCallback(event => {
    console.log('onClick', event)
    event.originalEvent.stopPropagation()
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
    const feature = event.features && event.features[0]
    const longitude = event.lngLat.lng
    const latitude = event.lngLat.lat
    let hoverInfo
    if (feature) {
      hoverInfo = {
        longitude,
        latitude,
        feature,
      }
    }

    setHovered(hoverInfo)
    if (event.type === 'mouseenter') {
      setCursor('pointer')
    } else if (event.type === 'mouseleave') {
      setCursor('default')
    }
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
      if (previousHovered) {
        const {id} = previousHovered.feature
        map.setFeatureState({
          source: 'cadastre',
          sourceLayer: 'parcelles',
          id,
        }, {hover: false})
      }

      if (hovered) {
        const {id} = hovered.feature

        map.setFeatureState({
          source: 'cadastre',
          sourceLayer: 'parcelles',
          id,
        }, {hover: true})
      }
    }
  }, [hovered]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (map && isLoaded) {
      const {id} = selectedParcelle || {}
      loadLayers()

      if (selectedParcelle && id && !selectedParcelle.section) { // To select parcelle with parcelleId url params
        const queryParcelle = map.queryRenderedFeatures({
          layers: ['parcelles'],
          filter: ['==', 'id', id],
        })[0]
        if (queryParcelle) {
          selectParcelle(queryParcelle.properties)
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
        ref={mapReference}
        {...viewState}
        onMove={onMove}
        style={{width: '100%', height: '100%'}}
        hash={false}
        locale={{'GeolocateControl.FindMyLocation': 'Trouver ma position', 'GeolocateControl.LocationNotAvailable': 'Position non disponible'}}
        mapStyle={mapStyle}
        {...settings}
        onClick={onClick}
        onHover={isTouchScreenDevice ? null : onHover}
        onLoad={() => setIsLoaded(true)}
        onMouseEnter={onHover}
        onMouseLeave={onHover}
        onMouseMove={onHover}
        cursor={cursor}
        interactiveLayerIds={interactiveLayerIds}
        mapLib={maplibregl}
      >
        <NavigationControl showCompass={false} />
        <GeolocateControl
          label='Géolocaliser'
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation
          fitBoundsOptions={{maxZoom: 16}}
        />
        <div style={{top: '108px'}} className='control navigation maplibregl-ctrl-top-right'>
          <div className='control custom maplibregl-ctrl-group maplibregl-ctrl'>
            <Control
              captureClick
              enabled={showBati}
              icon={<Home />}
              enabledHint='Afficher le bâti'
              disabledHint='Cacher le bâti'
              onChange={toggleBati} />
          </div>
        </div>

        <div className='control style-switch mapboxgl-ctrl-group mapboxgl-ctrl'>
          <SwitchMapStyle
            captureClick
            isVector={style === 'vector'}
            handleChange={changeStyle}
          />
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

        .navigation {
          top: 0;
          right: 0;
        }

        .style-switch {
          position: absolute;
          bottom: 0;
          left: 0;
        }

        .switch-style {
          width: 80px;
          height: 80px;
          border: 2px solid rgb(255, 255, 255);
          box-shadow: rgb(201 211 223) 0px 1px 4px 0
        }

        .text {
            position: relative;
            bottom: 26px;
            left: 4px;
            color: rgb(255, 255, 255);
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

MapComponent.propTypes = {
  viewState: PropTypes.shape({
    longitude: PropTypes.number.isRequired,
    latitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }).isRequired,
  isTouchScreenDevice: PropTypes.bool,
  showBati: PropTypes.bool.isRequired,
  toggleBati: PropTypes.func.isRequired,
  style: PropTypes.oneOf(['ortho', 'vector']).isRequired,
  changeStyle: PropTypes.func.isRequired,
  onMove: PropTypes.func.isRequired,
  selectedParcelle: PropTypes.shape({
    id: PropTypes.string,
    section: PropTypes.string,
  }),
  selectParcelle: PropTypes.func.isRequired,
}

export default MapComponent
