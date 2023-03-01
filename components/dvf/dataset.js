import React from 'react'
import PropTypes from 'prop-types'

function Dataset({year, size, link}) {
  return (
    <div className='article__author panel'>
      <div className='article__author-info'>
        <div className='article__author-name'>Valeurs foncière {year}</div>
        <div className='article__author-role'>{size}</div>
      </div>
      <p className='article__author-description'>
        Ce fichier contient les données pour l’année {year}.
      </p>
      <p className='article__author-description'>
        <a href={link} className='button'>Télécharger</a>
      </p>
    </div>
  )
}

Dataset.propTypes = {
  year: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default Dataset
