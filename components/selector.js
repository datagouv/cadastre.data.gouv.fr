import React from 'react'
import PropTypes from 'prop-types'
import ItemButton from './item-button.js'

const Selector = ({items, selected = null, handleSelect, unavailable = [], uppercase = false}) => (
  <div className='main grid'>
    {items.map(item => (
      <ItemButton
        key={item}
        item={item}
        selected={selected}
        handleSelect={handleSelect}
        unavailable={unavailable.includes(item)}
        uppercase={uppercase} />
    ))}
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
  uppercase: PropTypes.bool,
}

export default Selector
