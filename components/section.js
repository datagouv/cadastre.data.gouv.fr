import React from 'react'
import PropTypes from 'prop-types'

const Section = ({title, subtitle, children, background, beta}) => {
  const backgroundColor = background ? '-' + background : ''
  return (
    <section className={`section section${backgroundColor} `}>
      <div className='container'>
        {title && <h2 className='section__title'>{title} {beta && <span>Beta</span>}</h2>}
        {subtitle && <p className='section__subtitle'>{subtitle}</p>}

        {children}

      </div>
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  beta: PropTypes.bool,
  background: PropTypes.oneOf([
    'white',
    'grey',
    'dark',
    'color'
  ])
}

Section.defaultProps = {
  title: null,
  subtitle: null,
  children: null,
  background: null,
  beta: false
}

export default Section
