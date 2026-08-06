import React from 'react'
import PropTypes from 'prop-types'

const Documentation = ({title, format, link, children}) => (
  <div className='article__author panel'>
    <div className='article__author-info'>
      <div className='article__author-name'>{title}</div>
      <div className='article__author-role'>{format}</div>
    </div>
    <p className='article__author-description'>
      {children}
    </p>
    <p className='article__author-description'>
      <a href={link} className='button'>Télécharger</a>
    </p>
  </div>
)

Documentation.propTypes = {
  title: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Documentation
