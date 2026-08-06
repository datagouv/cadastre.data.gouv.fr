import React from 'react'
import PropTypes from 'prop-types'
import Selector from '../selector.js'
import Step from '../step.js'
import ApiGeo from '../api-geo.js'

const territories = [
  'départements',
  'communes',
  'epcis',
]

const stepTitlesDependingOnLevel = {
  communes: 'la commune',
  départements: 'le département',
  epcis: 'l\'EPCI',
}

class ProductSelection extends React.Component {
  render() {
    const {territorySelected, selectTerritoryType, selectTerritory} = this.props
    const stepTitle = territorySelected ? `Rechercher ${stepTitlesDependingOnLevel[territorySelected]}` : ''

    return (
      <>
        <Selector
          items={territories}
          selected={territorySelected}
          handleSelect={selectTerritoryType} />
        <Step
          title={stepTitle}
          disabled={Boolean(!territorySelected)}
        >
          {territorySelected ? <ApiGeo
            territoryType={territorySelected}
            onSelect={selectTerritory} />
            : <div />}
        </Step>
      </>
    )
  }
}

ProductSelection.propTypes = {
  selectTerritoryType: PropTypes.func.isRequired,
  selectTerritory: PropTypes.func.isRequired,
  territorySelected: PropTypes.string,
}

ProductSelection.defaultProps = {
  territorySelected: null,
}

export default ProductSelection
