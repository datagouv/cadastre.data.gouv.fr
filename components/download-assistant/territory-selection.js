import React from 'react'
import PropTypes from 'prop-types'

import Container from '../container'
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
      <div>
        <Selector
          items={territories}
          selected={territorySelected}
          unavailable={['epci']}
          onSelect={territory => selectTerritoryType(territory)} />
          <Container>
            <Step
              title={stepTitle}
              disabled={Boolean(!territorySelected)}>
              {territorySelected ?
                <ApiGeo
                  territoryType={territorySelected}
                  onSelect={territory => selectTerritory(territory)} /> :
                <div />
              }
            </Step>
          </Container>
      </div>
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
