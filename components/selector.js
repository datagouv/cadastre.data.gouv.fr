import PropTypes from 'prop-types'

import theme from '../styles/theme'

const Selector = ({items, selected, onSelect, unavailable, uppercase}) => (
  <div className='main'>
    <div className='list'>
      {items.map(item => {
        const div = unavailable.find(i => i === item) ? (
          <div key={item} className='unavailable'>
            <div className='item unavailable'>
              <div>{uppercase ? item.toUpperCase() : item}</div>
            </div>
            <div style={{fontStyle: 'italic'}}>Bientôt disponible</div>
          </div>
          ) : (
            <div key={item} className={`item ${selected === item ? 'selected' : ''}`} onClick={() => onSelect(item)}>
              <div>{uppercase ? item.toUpperCase() : item}</div>
            </div>
          )
        return div
      })}
    </div>
    <style jsx>{`
      .main {
        padding: 1em 0;
      }

      .list {
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(100px, 1fr));
      }

      .list div {
        text-align: center;
        justify-self: flex-start;
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
      }

      .item:hover {
        cursor: pointer;
        border-color: ${theme.primary};
      }

      .unavailable {
        display: flex;
        flex-flow: column;
        margin-left: 7px;
        color: ${theme.colors.grey};
      }

      .item .unavailable {
        border: 1px solid ${theme.colors.grey};
      }

      .item.unavailable:hover {
        cursor: default
        border: 1px solid ${theme.colors.grey};
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
