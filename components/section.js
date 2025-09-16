import React from 'react'

import Container from './container'

// background can be 'white', 'grey', 'dark' or 'color'
function Section({id = null, title = null, subtitle = null, children = null, background = 'white'}) {
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

export default Section
