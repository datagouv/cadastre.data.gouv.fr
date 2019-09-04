import React from 'react'
import PropTypes from 'prop-types'

import Selector from '../selector'
import Step from '../step'
import ApiGeo from '../api-geo'

const territories = [
  'départements',
  'communes',
  'epci'
]

class ProductSelection extends React.Component {
  render() {
    const {territorySelected, selectTerritoryType, selectTerritory} = this.props
    const stepTitle = territorySelected ? `Rechercher ${territorySelected === 'communes' ? 'la commune' : 'le département'}` : ''

    return (
      <>
        <Selector
          items={territories}
          selected={territorySelected}
          unavailable={['epci']}
          handleSelect={selectTerritoryType} />
        <Step
          title={stepTitle}
          disabled={Boolean(!territorySelected)}
        >
          {territorySelected ?
            <ApiGeo
              territoryType={territorySelected}
              onSelect={selectTerritory} /> :
            <div />
          }
        </Step>
      </>
    )
  }
}

ProductSelection.propTypes = {
  selectTerritoryType: PropTypes.func.isRequired,
  selectTerritory: PropTypes.func.isRequired,
  territorySelected: PropTypes.string
}

ProductSelection.defaultProps = {
  territorySelected: null
}

export default ProductSelection
