import PropTypes from 'prop-types'

const Grid = ({children, ...props}) => (
  <div className='grid' {...props}>
    {children}

    <style jsx>{`
      .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
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
  children: PropTypes.node
}

Grid.defaultProps = {
  children: null
}

export default Grid
