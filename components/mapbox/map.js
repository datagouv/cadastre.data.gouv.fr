import React, {useState, useCallback, useEffect} from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import mapboxgl from 'mapbox-gl'
import mapStyle from 'mapbox-gl/dist/mapbox-gl.css'

import Notification from '../notification'

import {vector, ortho} from './styles'
import SwitchMapStyle from './switch-map-style'

import useMarker from './hooks/marker'
import usePopup from './hooks/popup'
import useLoadData from './hooks/load-data'

const DEFAULT_CENTER = [1.7, 46.9]
const DEFAULT_ZOOM = 5

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

const Map = ({hasSwitchStyle, bbox, defaultStyle, defaultCenter, defaultZoom, isInteractive, showControls, controls, isLoading, error, children}) => {
  const [map, setMap] = useState(null)
  const [mapContainer, setMapContainer] = useState(null)
  const [isFirstLoad, setIsFirstLoad] = useState(false)
  const [style, setStyle] = useState(defaultStyle)
  const [infos, setInfos] = useState(null)
  const [tools, setTools] = useState(null)
  const [marker, setMarkerCoordinates] = useMarker(map)
  const [popup] = usePopup(marker)
  const [mapError, setMapError] = useState(error)

  const reloadData = useLoadData(map, isFirstLoad)

  const mapReference = useCallback(ref => {
    if (ref) {
      setMapContainer(ref)
    }
  }, [])

  const fitBounds = useCallback(bbox => {
    try {
      map.fitBounds(bbox, {
        padding: 30,
        linear: true,
        maxZoom: 19,
        duration: 0
      })
    } catch {
      setMapError('Aucune position n’est renseignée')
    }
  }, [map])

  const switchLayer = useCallback(() => {
    setStyle(style === 'vector' ?
      'ortho' :
      'vector'
    )
  }, [style])

  useEffect(() => {
    if (mapContainer) {
      const map = new mapboxgl.Map({
        container: mapContainer,
        style: getBaseStyle(style),
        center: defaultCenter || DEFAULT_CENTER,
        zoom: defaultZoom || DEFAULT_ZOOM,
        hash: true,
        isInteractive
      })

      if (showControls) {
        map.addControl(new mapboxgl.NavigationControl({showCompass: false}))
        controls.forEach(control => {
          map.addControl(control, 'top-right')
        })
      }

      map.once('load', () => {
        setIsFirstLoad(true)
      })

      setMap(map)
    }

    // Map should only be created when its container is ready
    // and should not be re-created
  }, [mapContainer]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setMapError(error)
  }, [error])

  useEffect(() => {
    if (bbox && map) {
      fitBounds(bbox)
    }
  }, [map, bbox, fitBounds])

  useEffect(() => {
    if (map) {
      map.setStyle(getBaseStyle(style), {diff: false})

      const onStyleData = () => {
        if (map.isStyleLoaded()) {
          reloadData()
        } else {
          setTimeout(onStyleData, 1000)
        }
      }

      map.on('styledata', onStyleData)

      return () => {
        map.off('styledata', onStyleData)
      }
    }
  }, [style]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='mapbox-container'>
      <div className='map'>
        {mapError && (
          <div className='tools error'>
            <Notification type='error' message={mapError} />
          </div>
        )}

        {!mapError && isLoading && (
          <div className='tools'>Chargement…</div>
        )}

        {!isLoading && !mapError && infos && (
          <div className='tools'>{infos}</div>
        )}

        {!isLoading && !mapError && tools && (
          <div className='tools right'>{tools}</div>
        )}

        {map && children({
          map,
          marker,
          popup,
          style,
          setInfos,
          setTools,
          setMarkerCoordinates
        })}

        <div ref={mapReference} className='map-container' />

        {hasSwitchStyle && (
          <div className='tools bottom switch'>
            <SwitchMapStyle
              isVector={style === 'vector'}
              handleChange={switchLayer}
            />
          </div>
        )}

      </div>

      <Head>
        <style key='mapbox'
          dangerouslySetInnerHTML={{__html: mapStyle}} // eslint-disable-line react/no-danger
        />
      </Head>

      <style jsx>{`
          .mapbox-container {
            position: relative;
            width: 100%;
            height: 100%;
          }

          .map-container {
            min-width: 250px;
            flex: 1;
          }

          .map {
            display: flex;
            height: 100%;
          }

          .tools {
            position: absolute;
            max-height: ${hasSwitchStyle ? 'calc(100% - 116px)' : '100%'};
            overflow-y: ${hasSwitchStyle ? 'scroll' : 'initial'};
            z-index: 1;
            padding: 0.5em;
            margin: 0.5em;
            border-radius: 4px;
            background-color: #ffffffbb;
            max-width: 80%;
          }

          .right {
            right: 0;
          }

          .bottom {
            bottom: 0;
            left: 0;
          }

          .switch {
            background-color: none;
            padding: 0;
            overflow: hidden;
          }
        `}</style>

    </div>
  )
}

Map.propTypes = {
  hasSwitchStyle: PropTypes.bool,
  bbox: PropTypes.array,
  defaultStyle: PropTypes.oneOf([
    'vector',
    'ortho'
  ]),
  isInteractive: PropTypes.bool,
  showControls: PropTypes.bool,
  controls: PropTypes.array,
  defaultCenter: PropTypes.array,
  defaultZoom: PropTypes.number,
  isLoading: PropTypes.bool,
  error: PropTypes.object,
  children: PropTypes.func.isRequired
}

Map.defaultProps = {
  bbox: null,
  defaultStyle: 'vector',
  isInteractive: true,
  showControls: true,
  controls: [],
  defaultCenter: DEFAULT_CENTER,
  defaultZoom: DEFAULT_ZOOM,
  isLoading: false,
  error: null,
  hasSwitchStyle: true
}

export default Map
