import React from 'react'
import PropTypes from 'prop-types'
import Selector from '../selector.js'

class ProductSelection extends React.Component {
  constructor(properties) {
    super(properties)
    this.select = this.select.bind(this)
  }

  select(item) {
    const {products, selectProduct} = this.props
    const product = products.find(p => p.name === item)
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
  productSelected: PropTypes.object,
}

ProductSelection.defaultProps = {
  productSelected: null,
}

export default ProductSelection
