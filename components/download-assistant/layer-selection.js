import React from 'react'
import PropTypes from 'prop-types'
import theme from '../../styles/theme.js'

class LayerSelection extends React.Component {
  constructor(properties) {
    super(properties)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {toggleLayer} = this.props
    toggleLayer(event.target.value)
  }

  render() {
    const {layers, layer} = this.props

    return (
      <div className='form'>
        {layers.map(lyr => (
          <div key={lyr}>
            <input type='radio' id={`radio-${lyr}`} value={lyr} checked={lyr === layer} onChange={this.handleChange} />
            <label className='label-inline'>{lyr}</label>
          </div>
        ))}
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
      </div>
    )
  }
}

LayerSelection.propTypes = {
  layers: PropTypes.array.isRequired,
  layer: PropTypes.string.isRequired,
  toggleLayer: PropTypes.func.isRequired,
}

export default LayerSelection
