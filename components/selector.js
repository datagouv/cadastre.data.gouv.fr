import React from 'react'
import PropTypes from 'prop-types'

import Grid from './grid'
import ItemButton from './item-button'

const Selector = ({items, selected, handleSelect, unavailable, uppercase}) => (
  <div className='main'>
    <Grid>
      {items.map(item => (
        <ItemButton
          key={item}
          item={item}
          selected={selected}
          handleSelect={handleSelect}
          unavailable={unavailable.includes(item)}
          uppercase={uppercase} />
      ))}
    </Grid>
    <style jsx>{`
      .main {
        padding: 1em 0;
      }
      `}</style>
  </div>
)

Selector.propTypes = {
  items: PropTypes.array.isRequired,
  handleSelect: PropTypes.func.isRequired,
  unavailable: PropTypes.array,
  selected: PropTypes.string,
  uppercase: PropTypes.bool
}

Selector.defaultProps = {
  selected: null,
  unavailable: [],
  uppercase: false
}

export default Selector
