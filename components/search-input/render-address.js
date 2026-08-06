import React from 'react'
import theme from '../../styles/theme.js'

const featuresTypes = {
  housenumber: 'numéro',
  street: 'rue',
  locality: 'lieu-dit',
  hamlet: 'hameau',
  village: 'village',
  city: 'ville',
  municipality: 'commune',
}

const RenderAdresse = (item, isHighlighted) => {
  const {id, label, context, type} = item.properties
  return (
    <div key={id} className={`item ${isHighlighted ? 'item-highlighted' : ''}`}>
      <div>
        <div className='item-label'>{label}</div>
        <div>{context}</div>
      </div>
      <div>{featuresTypes[type]}</div>
      <style jsx>{`
        .item {
          display: flex;
          flex-flow: row;
          justify-content: space-between;
          align-items: center;
          padding: 1em;
        }

        .item .item-label {
          font-weight: 600;
        }

        .item:hover {
          cursor: pointer;
        }

        .item-highlighted {
          background-color: ${theme.primary};
          color: ${theme.colors.white};
        }
        `}</style>
    </div>
  )
}

export default RenderAdresse
