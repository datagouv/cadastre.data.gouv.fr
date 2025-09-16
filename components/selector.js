import React from 'react'

import ItemButton from './item-button'

function Selector({items, selected = null, handleSelect, unavailable = [], uppercase = false}) {
  return (
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
}

export default Selector
