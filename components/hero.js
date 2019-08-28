import React from 'react'
import PropTypes from 'prop-types'

import theme from '../styles/theme'

const Hero = ({title, tagline}) => (
  <div className='hero'>
    <div className='hero__container'>
      <h1 className='hero__white-background'>{title}</h1>
      <p className='hero__white-background'>{tagline}</p>
    </div>
    <style jsx>{`
      .hero {
        background-color: ${theme.backgroundGrey};
        background-blend-mode: darken;
        background-image: url(/static/images/background.png);
      }
    `}</style>
  </div>
)

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired
}

export default Hero
