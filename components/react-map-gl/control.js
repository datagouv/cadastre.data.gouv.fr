import React from 'react'
import PropTypes from 'prop-types'
import {BaseControl} from 'react-map-gl'

class Control extends BaseControl {
  static defaultProps = {
    enabled: true
  }

  static propTypes = {
    enabled: PropTypes.bool,
    icon: PropTypes.node.isRequired,
    enabledHint: PropTypes.string.isRequired,
    disabledHint: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  _render() {
    const {enabled, enabledHint, disabledHint, onChange, icon} = this.props

    return (
      <button
        type='button'
        ref={this._containerRef}
        className='maplibregl-ctrl-icon maplibregl-ctrl-custom-control'
        title={enabled ? enabledHint : disabledHint}
        onClick={onChange}
      >
        <span className='maplibregl-ctrl-icon' aria-hidden='true'>{icon}</span>

        <style jsx>{`
          button span {
            display: flex;
            justify-content: center;
            align-items: center;
            color: ${enabled ? '#000' : '#a5a5a5'};
          }
        `}</style>
      </button>
    )
  }
}

export default Control
