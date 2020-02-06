import React from 'react'
import PropTypes from 'prop-types'

const ParcelleSumup = ({parcelle}) => {
  let unit = ''
  let surface = 0
  const {id, commune, prefixe, section, numero, contenance} = parcelle

  if (contenance.toString().length < 3) {
    unit = 'm2'
    surface = contenance
  } else if (contenance.toString().length >= 3 && contenance.toString().length < 5) {
    unit = 'a'
    surface = contenance / 100
  } else {
    unit = 'ha'
    surface = (contenance / 10000).toFixed(2)
  }

  return (
    <div className='infos-container'>
      <div>
        <span className='title'>ID: </span>
        <span>{id}</span>
      </div>
      <div>
        <span className='title'>Code Commune: </span>
        <span>{commune}</span>
      </div>
      <div>
        <span className='title'>Section: </span>
        <span>{(prefixe === '000') ? '' : prefixe} {section}</span>
      </div>
      <div>
        <span className='title'>Numero: </span>
        <span>{numero}</span>
      </div>
      <div>
        <span className='title'>Contenance: </span>
        <span>{surface} {unit}</span>
      </div>
      <style jsx>{`
        .title {
          font-size: .8em;
          font-weight: bold;
        }
        .infos-container {
          padding: .5em;
        }
      `}</style>
    </div>
  )
}

ParcelleSumup.propTypes = {
  parcelle: PropTypes.shape({
    id: PropTypes.string.isRequired,
    commune: PropTypes.string.isRequired,
    prefixe: PropTypes.string.isRequired,
    section: PropTypes.string.isRequired,
    numero: PropTypes.string.isRequired,
    contenance: PropTypes.string.isRequired
  }).isRequired
}

export default ParcelleSumup
