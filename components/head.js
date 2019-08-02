import React from 'react'
import PropTypes from 'prop-types'

import Section from './section'

const Head = ({children, title, icon}) => (
  <Section background='color'>
    <h1>{icon} {title}</h1>
    <p className='description'>{children}</p>
  </Section>
)

Head.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired
}

export default Head
