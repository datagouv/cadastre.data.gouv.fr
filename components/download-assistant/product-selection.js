import React from 'react'
import PropTypes from 'prop-types'

import Step from '../step'
import Selector from '../selector'
import Container from '../container'

import theme from '../../styles/theme'

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
  select(productName) {
    const {selectProduct, toggleLayer} = this.props
    const product = products.find(p => p.name === productName)

    if (productName === 'Cadastre Etalab') {
      toggleLayer(product.layers)
    }

    selectProduct(product)
  }

  render() {
    const {productSelected, layer, toggleLayer} = this.props

    return (
      <div>
        <Selector
          items={products.map(product => product.name)}
          selected={productSelected ? productSelected.name : null}
          unavailable={['Cadastre Strasbourg']}
          onSelect={(product => this.select(product))} />
        {productSelected && productSelected.name === 'Cadastre Etalab' &&
          <Container>
            <Step
              title='Sélectionner une couche'
              disabled={Boolean(productSelected.name !== 'Cadastre Etalab')}>
              <div className='form'>
                {productSelected.layers.map(lyr => (
                  <div key={lyr}>
                    <input type='radio' id={`radio-${lyr}`} value={lyr} checked={lyr === layer} onChange={e => toggleLayer(e.target.value)} />
                    <label className='label-inline'>{lyr}</label>
                  </div>
                ))}
              </div>
            </Step>
          </Container>}
        <style jsx>{`
          .form {
            display: flex;
            justify-content: space-between;
          }

          label.label-inline,
          label-inline:first-letter {
            display: inline;
            color: ${theme.colors.black};
            text-transform: capitalize;
          }

          .label-inline + input[type=radio],
          .label-inline + input[type=checkbox] {
            margin-left: 10px;
          }
          `}</style>
      </div>
    )
  }
}

ProductSelection.propTypes = {
  selectProduct: PropTypes.func.isRequired,
  toggleLayer: PropTypes.func.isRequired,
  productSelected: PropTypes.object,
  layer: PropTypes.string
}

ProductSelection.defaultProps = {
  layer: 'communes',
  productSelected: null
}

export default ProductSelection
