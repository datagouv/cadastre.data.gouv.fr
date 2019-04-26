import PropTypes from 'prop-types'
import Link from 'next/link'

const ButtonLink = ({children, ...props}) => {
  const {href, as} = props
  return (
    <Link href={href} as={as}>
      <a className='button' {...props}>
        {children}
      </a>
    </Link>
  )
}

ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  as: PropTypes.string,
  children: PropTypes.node
}

ButtonLink.defaultProps = {
  as: null,
  children: null
}

export default ButtonLink
