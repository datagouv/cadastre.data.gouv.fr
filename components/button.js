/* eslint react/button-has-type: off */
import React from 'react'
import PropTypes from 'prop-types'

function Button({size, color, outlined, children, ...props}) {
  return (
    <button className={`button${outlined ? '-outlined' : ''} ${size} ${color}`} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  size: PropTypes.oneOf([
    'small',
    'large'
  ]),
  color: PropTypes.oneOf([
    'primary',
    'warning-light',
    'warning',
    'secondary'
  ]),
  outlined: PropTypes.bool,
  children: PropTypes.node
}

Button.defaultProps = {
  size: null,
  color: 'primary',
  outlined: false,
  children: null
}

export default Button
