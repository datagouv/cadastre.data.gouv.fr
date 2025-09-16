import React from 'react'
import PropTypes from 'prop-types'

const ButtonLink = ({size = null, color = 'primary', href, outlined = false, children = null, ...properties}) => (
  <a href={href} className={`button${outlined ? '-outline' : ''} ${size} ${color}`} {...properties}>
    {children}
  </a>
)

ButtonLink.propTypes = {
  size: PropTypes.oneOf([
    'small',
    'large',
  ]),
  color: PropTypes.oneOf([
    'primary',
    'warning-light',
    'warning',
    'secondary',
  ]),
  href: PropTypes.string.isRequired,
  outlined: PropTypes.bool,
  children: PropTypes.node,
}

export default ButtonLink
