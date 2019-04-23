import PropTypes from 'prop-types'

const Button = ({children, ...props}) => (
  <button className='button' type='button' {...props}>
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node
}

Button.defaultProps = {
  children: null
}

export default Button
