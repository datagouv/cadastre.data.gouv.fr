import React from 'react'
import PropTypes from 'prop-types'

import Step from '../step'
import Container from '../container'

import theme from '../../styles/theme'

class LayerSelection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {toggleLayer} = this.props
    toggleLayer(event.target.value)
  }

  render() {
    const {productSelected, layer} = this.props

    return (
      <Container>
        <Step
          title='Sélectionner une couche'
          disabled={Boolean(productSelected.name !== 'Cadastre Etalab')}>
          <div className='form'>
            {productSelected.layers.map(lyr => (
              <div key={lyr}>
                <input type='radio' id={`radio-${lyr}`} value={lyr} checked={lyr === layer} onChange={this.handleChange} />
                <label className='label-inline'>{lyr}</label>
              </div>
            ))}
          </div>
        </Step>
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

          @media screen and (max-width: 640px) {
            .form {
              flex-flow: column;
            }
          }
        `}</style>
      </Container>
    )
  }
}

LayerSelection.propTypes = {
  productSelected: PropTypes.object.isRequired,
  layer: PropTypes.string.isRequired,
  toggleLayer: PropTypes.func.isRequired
}

export default LayerSelection
