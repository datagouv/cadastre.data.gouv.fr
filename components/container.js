import React from 'react'

function Container({children = null}) {
  return (
    <div className='container'>
      {children}
    </div>
  )
}

export default Container
