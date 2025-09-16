import PropTypes from 'prop-types'
import React from 'react'
import Step from '../step.js'
import Selector from '../selector.js'
import ProductSelection from './product-selection.js'
import TerritorySelection from './territory-selection.js'
import LayerSelection from './layer-selection.js'

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
      <>
        <Step id='territory' title='Sélectionner un territoire' disabled={false}>
          <TerritorySelection
            territorySelected={territoryType}
            selectTerritoryType={setTerritoryType}
            selectTerritory={setTerritory} />
        </Step>

        {productList.length > 1 && <Step id='product' title='Sélectionner un produit' disabled={Boolean(!territory)}>
          <ProductSelection
            products={productList}
            productSelected={product}
            selectProduct={setProduct} />
        </Step>}

        <Step id='format' title='Sélectionner un format' disabled={Boolean(!territory || !product)}>
          <Selector
            items={product && territory ? product.formats : []}
            selected={format}
            uppercase
            handleSelect={setFormat} />
        </Step>

        {layer
          && <Step id='layer' title='Sélectionner une couche' disabled={Boolean(!format || !territory || !product)}>
            <LayerSelection layers={product.layers} layer={layer} toggleLayer={setLayer} />
          </Step>}
      </>
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
  formCompleted: PropTypes.func.isRequired,
}

DownloadForm.defaultProps = {
  product: null,
  territoryType: null,
  territory: null,
  format: null,
  layer: null,
}

export default DownloadForm
