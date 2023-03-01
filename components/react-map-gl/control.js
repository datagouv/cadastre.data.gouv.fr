import React from 'react'
import PropTypes from 'prop-types'

class Control extends React.Component {
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

  render() {
    const {enabled, enabledHint, disabledHint, onChange, icon} = this.props
    return (
      <button
        type='button'
        ref={this._containerRef}
        className='mapboxgl-ctrl-icon mapboxgl-ctrl-custom-control'
        title={enabled ? enabledHint : disabledHint}
        onClick={onChange}
      >
        <span className='mapboxgl-ctrl-icon' aria-hidden='true'>{icon}</span>

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
