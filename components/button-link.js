import PropTypes from 'prop-types'

const ButtonLink = ({children, ...props}) => (
  <a className='button' {...props}>
    {children}
  </a>
)

ButtonLink.propTypes = {
  children: PropTypes.node
}

ButtonLink.defaultProps = {
  children: null
}

export default ButtonLink
