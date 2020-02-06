/* eslint react/no-danger: off */
import React, {useCallback, useEffect} from 'react'
import {renderToString} from 'react-dom/server'
import PropTypes from 'prop-types'

import ParcelleSumup from './parcelle-sumup'

let hoveredStateId = null
let selectedId = null

const CadastreMap = ({map, zoom, center, popup, selectedParcelleId, selectParcelle}) => {
  const handleClick = useCallback(e => {
    const {id} = e.features[0]
    selectParcelle(id === selectedId ? null : e.features[0].id)
  }, [selectParcelle])

  const onHover = e => {
    if (e.features.length > 0) {
      const {id, source, sourceLayer} = e.features[0]
      if (hoveredStateId) {
        map.setFeatureState({source, sourceLayer, id: hoveredStateId}, {hover: false})
      }

      hoveredStateId = id

      popup.setLngLat(e.lngLat)
        .setHTML(renderToString(
          <ParcelleSumup parcelle={e.features[0].properties} />
        ))
        .addTo(map)

      map.getCanvas().style.cursor = 'pointer'

      map.setFeatureState({source, sourceLayer, id: hoveredStateId}, {hover: true})
    }
  }

  const onLeave = () => {
    if (hoveredStateId) {
      map.setFeatureState({source: 'cadastre', sourceLayer: 'parcelles', id: hoveredStateId}, {hover: false})

      map.getCanvas().style.cursor = 'default'
      hoveredStateId = null

      popup.remove()
    }
  }

  useEffect(() => {
    if (selectedId) {
      map.setFeatureState({
        source: 'cadastre',
        sourceLayer: 'parcelles',
        id: selectedId
      },
      {selected: false}
      )
    }

    if (selectedParcelleId) {
      map.setFeatureState({
        source: 'cadastre',
        sourceLayer: 'parcelles',
        id: selectedParcelleId
      },
      {selected: true}
      )
    }

    selectedId = selectedParcelleId
  }, [map, selectedParcelleId])

  useEffect(() => {
    if (zoom) {
      map.setZoom(zoom)
    }

    if (center) {
      map.setCenter(center)
    }
  }, [center, map, zoom])

  useEffect(() => {
    map.on('mousemove', 'parcelles-fill', onHover)
    map.on('mouseleave', 'parcelles-fill', onLeave)
    map.on('click', 'parcelles-fill', handleClick)

    return () => {
      map.off('mousemove', 'parcelles-fill', onHover)
      map.off('mouseleave', 'parcelles-fill', onLeave)
      map.off('click', 'parcelles-fill', handleClick)
    }

    // No dependency in order to mock a didMount and avoid duplicating events.
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return null
}

CadastreMap.propTypes = {
  selectedParcelle: null
}

CadastreMap.propTypes = {
  map: PropTypes.object.isRequired,
  zoom: PropTypes.number,
  center: PropTypes.array,
  selectedParcelle: PropTypes.number,
  selectParcelle: PropTypes.func.isRequired
}

export default CadastreMap
