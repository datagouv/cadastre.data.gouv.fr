import React from 'react'
import PropTypes from 'prop-types'
import {X} from 'react-feather'
import Button from './button.js'

const Notification = ({message = null, type = null, style = null, isFullWidth = false, onClose = null, children = null}) => (
  <div style={style} className={`notification ${type || ''} ${onClose ? 'closable' : ''} ${isFullWidth ? 'full-width' : ''}`}>
    {children || message}
    {onClose && (
      <Button className='close' aria-label='Fermer' onClick={onClose}><X /></Button>
    )}
  </div >
)

Notification.propTypes = {
  message: PropTypes.node,
  type: PropTypes.oneOf(['success', 'warning', 'error']),
  style: PropTypes.object,
  isFullWidth: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
}

export default Notification
