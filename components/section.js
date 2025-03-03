import React from 'react'
import PropTypes from 'prop-types'

import Container from './container'

function Section({id, title, subtitle, children, background}) {
  return (
    <section id={id} className={`section section-${background}`}>
      <Container>
        {title && <h2 className='section__title'>{title}</h2>}
        {subtitle && <p className='section__subtitle'>{subtitle}</p>}
        {children}
      </Container>
    </section>
  )
}

Section.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  background: PropTypes.oneOf([
    'white',
    'grey',
    'dark',
    'color'
  ])
}

Section.defaultProps = {
  id: null,
  title: null,
  subtitle: null,
  children: null,
  background: 'white'
}

export default Section
