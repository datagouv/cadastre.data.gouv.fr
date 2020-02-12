import React, {useCallback} from 'react'
import PropTypes from 'prop-types'

const Control = ({enabled, icon, enabledHint, disabledHint, onChange}) => {
  const onToggle = useCallback(e => {
    e.stopPropagation()
    onChange(enabled => !enabled)
  }, [onChange])

  return (
    <button
      type='button'
      className='mapboxgl-ctrl-icon mapboxgl-ctrl-enabled'
      title={enabled ? enabledHint : disabledHint}
      onClick={onToggle}
    >
      {icon}

      <style jsx>{`
        button {
          color: ${enabled ? '#000' : '#a5a5a5'};
        }
        `}</style>
    </button>
  )
}

Control.propTypes = {
  enabled: PropTypes.bool,
  icon: PropTypes.node.isRequired,
  enabledHint: PropTypes.string.isRequired,
  disabledHint: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

Control.defaultProps = {
  enabled: true
}

export default Control
