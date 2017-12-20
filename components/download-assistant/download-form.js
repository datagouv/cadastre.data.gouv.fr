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
    const {productList, setLayer, setProduct, setTerritoryType, setTerritory, setFormat} = this.props
    const {product, territoryType, territory, format, layer} = this.props

    return (
      <Section>
        {productList.length > 1 && <Step id='product' title='Sélectionner un produit' disabled={false}>
          <ProductSelection
            products={productList}
            productSelected={product}
            layer={layer}
            toggleLayer={setLayer}
            selectProduct={setProduct} />
        </Step>}

        <Step id='territory' title='Sélectionner un territoire' disabled={Boolean(!product)}>
          <TerritorySelection
            territorySelected={territoryType}
            selectTerritoryType={setTerritoryType}
            selectTerritory={setTerritory} />
        </Step>

        <Step id='format' title='Sélectionner un format' disabled={Boolean(!territory)}>
          <Selector
            items={product && territory ? product.formats : []}
            selected={format}
            uppercase
            handleSelect={setFormat} />
          {product && product.name === 'Cadastre Etalab' &&
            <LayerSelection productSelected={product} layer={layer} toggleLayer={setLayer} />
          }
        </Step>
      </Section>
    )
  }
}

DownloadForm.propTypes = {
  product: PropTypes.object,
  territoryType: PropTypes.string,
  territory: PropTypes.object,
  format: PropTypes.string,
  layer: PropTypes.string,
  productList: PropTypes.array.isRequired,
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
