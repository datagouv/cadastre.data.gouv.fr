import React from 'react'
import PropTypes from 'prop-types'

import Selector from '../selector'

const products = [
  {
    name: 'PCI Vecteur',
    formats: [
      'dxf',
      'edigeo',
      'edigeo/cc'
    ]
  },
  {
    name: 'PCI Image',
    formats: [
      'tiff'
    ]
  },
  {
    name: 'Cadastre Etalab',
    formats: [
      'geojson',
      'geojson/gz'
    ],
    layers: [
      'communes',
      'sections',
      'feuilles',
      'parcelles',
      'bâtiments'
    ]
  },
  {
    name: 'Cadastre Strasbourg',
    formats: [
      'shp/cc49'
    ]
  }
]

class ProductSelection extends React.Component {
  constructor(props) {
    super(props)
    this.select = this.select.bind(this)
  }

  select(item) {
    const {selectProduct, toggleLayer} = this.props
    const product = products.find(p => p.name === item)

    if (item === 'Cadastre Etalab') {
      toggleLayer(product.layers)
    }

    selectProduct(product)
  }

  render() {
    const {productSelected} = this.props

    return (
      <div>
        <Selector
          items={products.map(product => product.name)}
          selected={productSelected ? productSelected.name : null}
          unavailable={['Cadastre Strasbourg']}
          handleSelect={this.select} />
      </div>
    )
  }
}

ProductSelection.propTypes = {
  selectProduct: PropTypes.func.isRequired,
  toggleLayer: PropTypes.func.isRequired,
  productSelected: PropTypes.object
}

ProductSelection.defaultProps = {
  productSelected: null
}

export default ProductSelection
