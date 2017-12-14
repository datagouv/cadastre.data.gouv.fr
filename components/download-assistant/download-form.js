import PropTypes from 'prop-types'
import React from 'react'

import Section from '../section'
import Step from '../step'
import Selector from '../selector'
import ProductSelection from './product-selection'
import TerritorySelection from './territory-selection'
import LayerSelection from './layer-selection'

class DownloadForm extends React.Component {
  componentDidUpdate() {
    const {product, territoryType, territory, format, formCompleted} = this.props
    const isCompleted = Boolean(product && territoryType && territory && format)

    formCompleted(isCompleted)
  }

  render() {
    const {setLayer, setProduct, setTerritoryType, setTerritory, setFormat} = this.props
    const {product, territoryType, territory, format, layer} = this.props

    return (
      <div>
        <Section>
          <h1>Assistant de téléchargement</h1>

          <Step id='product' title='1. Sélectionner un produit' disabled={false}>
            <ProductSelection
              productSelected={product}
              layer={layer}
              toggleLayer={layer => setLayer(layer)}
              selectProduct={product => setProduct(product)} />
          </Step>

          <Step id='territory' title='2. Sélectionner un territoire' disabled={Boolean(!product)}>
            <TerritorySelection
              territorySelected={territoryType}
              selectTerritoryType={territoryType => setTerritoryType(territoryType)}
              selectTerritory={territory => setTerritory(territory)} />
          </Step>

          <Step id='format' title='3. Sélectionner un format' disabled={Boolean(!territory)}>
            <Selector
              items={product && territory ? product.formats : []}
              selected={format}
              unavailable={['edigeo/cc']}
              uppercase
              onSelect={(format => setFormat(format))} />
            {product && product.name === 'Cadastre Etalab' &&
              <LayerSelection productSelected={product} layer={layer} toggleLayer={layer => setLayer(layer)} />
            }
          </Step>
        </Section>
      </div>
    )
  }
}

DownloadForm.propTypes = {
  product: PropTypes.object,
  territoryType: PropTypes.string,
  territory: PropTypes.object,
  format: PropTypes.string,
  layer: PropTypes.string,
  setLayer: PropTypes.func.isRequired,
  setProduct: PropTypes.func.isRequired,
  setTerritoryType: PropTypes.func.isRequired,
  setTerritory: PropTypes.func.isRequired,
  setFormat: PropTypes.func.isRequired,
  formCompleted: PropTypes.func.isRequired
}

DownloadForm.defaultProps = {
  product: null,
  territoryType: null,
  territory: null,
  format: null,
  layer: null
}

export default DownloadForm
