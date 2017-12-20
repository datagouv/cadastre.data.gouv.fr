import React from 'react'
import PropTypes from 'prop-types'

import Selector from '../selector'

class ProductSelection extends React.Component {
  constructor(props) {
    super(props)
    this.select = this.select.bind(this)
  }

  select(item) {
    const {products, selectProduct, toggleLayer} = this.props
    const product = products.find(p => p.name === item)

    if (item === 'Cadastre Etalab') {
      toggleLayer(product.layers)
    }

    selectProduct(product)
  }

  render() {
    const {products, productSelected} = this.props

    return (
      <div>
        <Selector
          items={products.map(product => product.name)}
          selected={productSelected ? productSelected.name : null}
          handleSelect={this.select} />
      </div>
    )
  }
}

ProductSelection.propTypes = {
  products: PropTypes.array.isRequired,
  selectProduct: PropTypes.func.isRequired,
  toggleLayer: PropTypes.func.isRequired,
  productSelected: PropTypes.object
}

ProductSelection.defaultProps = {
  productSelected: null
}

export default ProductSelection
