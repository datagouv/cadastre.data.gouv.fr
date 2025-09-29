import React from 'react'
import PropTypes from 'prop-types'

const Grid = ({children = null, columns = 4, ...properties}) => (
  <div className='grid' {...properties}>
    {children}

    <style jsx>{`
      .grid {
        display: grid;
        grid-template-columns: repeat(${columns}, 1fr);
        grid-gap: 10px;
        grid-auto-rows: minmax(100px, auto);
      }

      .grid div {
        text-align: center;
        justify-self: flex-start;
      }

      @media screen and (max-width: 640px) {
        .grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    `}</style>
  </div>
)

Grid.propTypes = {
  columns: PropTypes.number,
  children: PropTypes.node,
}

export default Grid
