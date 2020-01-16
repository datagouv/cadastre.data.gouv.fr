/* eslint react/no-danger: off */
import {useEffect} from 'react'
import PropTypes from 'prop-types'

const AddressMap = ({map, zoom, center}) => {
  useEffect(() => {
    if (zoom) {
      map.setZoom(zoom)
    }

    if (center) {
      map.setCenter(center)
    }
  }, [center, map, zoom])

  return null
}

AddressMap.propTypes = {
  zoom: PropTypes.number,
  center: PropTypes.object,
  map: PropTypes.object.isRequired
}

export default AddressMap
