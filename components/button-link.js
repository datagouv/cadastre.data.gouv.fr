import React from 'react'
import PropTypes from 'prop-types'

const ButtonLink = ({size, color, href, outlined, children, ...props}) => {
  return (
    <a href={href} className={`button${outlined ? '-outline' : ''} ${size} ${color}`} {...props}>
      {children}
    </a>
  )
}

ButtonLink.propTypes = {
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
  href: PropTypes.string.isRequired,
  outlined: PropTypes.bool,
  children: PropTypes.node
}

ButtonLink.defaultProps = {
  size: null,
  color: 'primary',
  outlined: false,
  children: null
}

export default ButtonLink
