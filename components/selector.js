import PropTypes from 'prop-types'

import theme from '../styles/theme'

import Grid from './grid'

const Selector = ({items, selected, onSelect, unavailable, uppercase}) => (
  <div className='main'>
    <Grid>
      {items.map(item => {
        const div = unavailable.find(i => i === item) ? (
          <div key={item} className='unavailable'>
            <div className='item unavailable'>
              <div>{uppercase ? item.toUpperCase() : item}</div>
            </div>
            <div style={{fontStyle: 'italic', position: 'relative', left: '-7px'}}>Bientôt disponible</div>
          </div>
          ) : (
            <div key={item} className={`item ${selected === item ? 'selected' : ''}`} onClick={() => onSelect(item)}>
              <div>{uppercase ? item.toUpperCase() : item}</div>
            </div>
          )
        return div
      })}
    </Grid>
    <style jsx>{`
      .main {
        padding: 1em 0;
      }

      .item {
        margin: 10px 0;
        outline: none;
        width: 100px;
        height: 100px;
        font: inherit;
        line-height: 1.6;
        color: ${theme.black};
        border-radius: ${theme.borderRadius};
        box-sizing: border-box;
        border: 1px solid ${theme.border};
        vertical-align: middle;
        position: relative;
        text-align: center;
      }

      .item:hover {
        cursor: pointer;
        border-color: ${theme.primary};
        box-shadow: 0 3px 4px 0 rgba(0, 129, 213, 0.17)
      }

      .unavailable {
        display: flex;
        flex-flow: column;
        // margin-left: 7px;
        color: ${theme.colors.grey};
      }

      .item .unavailable {
        border: 1px solid ${theme.colors.grey};
      }

      .item.unavailable:hover {
        cursor: default
        border: 1px solid ${theme.colors.grey};
        box-shadow: none;
      }

      .item div {
        position: relative;
        float: left;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      .selected {
        background-color: ${theme.backgroundWhite};
        border-color: ${theme.primary};
        color: ${theme.primary};
        transition: border-color 0.2s ease-out;
      }

      `}</style>
  </div>
)

Selector.propTypes = {
  items: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
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
