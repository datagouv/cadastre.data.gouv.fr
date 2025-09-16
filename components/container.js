import React from 'react'
import PropTypes from 'prop-types'

function Container({children = null}) {
  return (
    <div className='container'>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node
}

export default Container
