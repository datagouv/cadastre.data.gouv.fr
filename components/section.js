import React from 'react'
import PropTypes from 'prop-types'
import Container from './container.js'

const Section = ({id = null, title = null, subtitle = null, children = null, background = 'white'}) => (
  <section id={id} className={`section section-${background}`}>
    <Container>
      {title && <h2 className='section__title'>{title}</h2>}
      {subtitle && <p className='section__subtitle'>{subtitle}</p>}
      {children}
    </Container>
  </section>
)

Section.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  background: PropTypes.oneOf([
    'white',
    'grey',
    'dark',
    'color',
  ]),
}

export default Section
