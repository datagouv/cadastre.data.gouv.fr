import React from 'react'
import PropTypes from 'prop-types'
import theme from '../../styles/theme.js'

class SwitchMapStyle extends React.Component {
  static propTypes = {
    isVector: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
  }

  render() {
    const {isVector, handleChange} = this.props
    const source = `/static/images/map/preview-${isVector ? 'vector' : 'ortho'}.png`
    const style = isVector ? 'Vectoriel' : 'Satellite'

    return (
      <div
        ref={this._containerRef}
        className='switch-style maplibregl-ctrl-switch-map-style'
        onClick={handleChange}
      >
        <img alt={style} src={source} />
        <div className='text'>{style}</div>
        <style jsx>{`
          .switch-style {
            width: 80px;
            height: 80px;
            border: 2px solid #fff;
            box-shadow: 0 1px 4px 0 ${theme.boxShadow};
          }

          img {
            width: 100%;
            height: 100%;
          }

          img:hover {
            cursor: pointer;
          }

          .text {
            position: relative;
            bottom: 26px;
            left: 4px;
            color: ${isVector ? '#000' : '#fff'};
          }
        `}</style>
      </div>
    )
  }
}

export default SwitchMapStyle
