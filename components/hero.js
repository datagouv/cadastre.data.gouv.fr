import React from 'react'
import PropTypes from 'prop-types'

import theme from '../styles/theme'

function Hero({title, tagline, children}) {
  return (
    <div className='hero'>
      <div className='hero__container'>
        <h1 className='hero__white-background'>{title}</h1>
        <p className='hero__white-background'>{tagline}</p>
        {children}
      </div>
      <style jsx>{`
      .hero {
        background-color: ${theme.backgroundGrey};
        background-blend-mode: darken;
        background-image: url(/static/images/background.png);
      }

      .hero__white-background {
        padding: 10px 1em;
        background-color: ${theme.colors.white};
      }
    `}</style>
    </div>
  )
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  children: PropTypes.node
}

Hero.defaultProps = {
  children: null
}

export default Hero
