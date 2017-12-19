import PropTypes from 'prop-types'
import React from 'react'

import theme from '../styles/theme'

class ItemButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const {handleSelect, item} = this.props
    handleSelect(item)
  }

  render() {
    const {item, unavailable, uppercase, selected} = this.props
    const text = uppercase ? item.toUpperCase() : item

    return (
      <div>
        {unavailable ?
          <div key={item} className='unavailable'>
            <div className='item unavailable'>
              <div>{text}</div>
            </div>
            <div style={{fontStyle: 'italic', position: 'relative', left: '-7px'}}>Bientôt disponible</div>
          </div> :
          <div key={item} value={text} className={`item ${selected === item ? 'selected' : ''}`} onClick={this.handleClick}>
            <div>{text}</div>
          </div>
        }
        <style jsx>{`
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
  }

}

ItemButton.propTypes = {
  item: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
  unavailable: PropTypes.bool,
  selected: PropTypes.string,
  uppercase: PropTypes.bool
}

ItemButton.defaultProps = {
  selected: null,
  unavailable: false,
  uppercase: false
}

export default ItemButton
