import React from 'react'
import PropTypes from 'prop-types'
import {contenanceToSurface} from '../../lib/surfaces.js'

const ParcelleSumup = ({prefixe, section, numero, contenance}) => (
  <div className='sumup-container'>
    <div>
      <span className='title'>Parcelle </span>
      <span>{(prefixe === '000') ? '' : prefixe} {section} {numero}</span>
    </div>
    {contenance && <div>
      <span className='title'>Contenance </span>
      <span>{contenanceToSurface(contenance)}</span>
    </div>}
    <style jsx>{`
        .sumup-container {
          font-size: larger;
        }

        .title {
          font-weight: bold;
        }
      `}</style>
  </div>
)

ParcelleSumup.propTypes = {
  prefixe: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  numero: PropTypes.string.isRequired,
  contenance: PropTypes.number.isRequired,
}

export default ParcelleSumup
