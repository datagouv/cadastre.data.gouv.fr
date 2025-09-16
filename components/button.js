/* eslint react/button-has-type: off */
import React from 'react'
import PropTypes from 'prop-types'

// size can be 'small', 'large'
// color can be 'primary', 'warning-light', 'warning', 'secondary'
function Button({size = null, color = 'primary', outlined = false, children = null, ...props}) {
  return (
    <button className={`button${outlined ? '-outlined' : ''} ${size} ${color}`} {...props}>
      {children}
    </button>
  )
}

export default Button
