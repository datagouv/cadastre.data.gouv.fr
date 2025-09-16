import React from 'react'
import PropTypes from 'prop-types'

// size can be 'small', 'large'
// color can be 'primary', 'warning-light', 'warning', 'secondary'
function ButtonLink({size = null, color = 'primary', href, outlined = false, children = null, ...props}) {
  return (
    <a href={href} className={`button${outlined ? '-outline' : ''} ${size} ${color}`} {...props}>
      {children}
    </a>
  )
}

export default ButtonLink
