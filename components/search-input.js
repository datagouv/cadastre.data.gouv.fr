import React from 'react'
import Autocomplete from 'react-autocomplete'
import PropTypes from 'prop-types'

import theme from '../styles/theme'

const wrapperStyle = {
  width: '100%'
}

const SearchInput = ({value, results, loading, placeholder, search, handleSelect}) => {
  return (
    <div>
      <Autocomplete
        value={value}
        inputProps={{id: 'states-autocomplete'}}
        wrapperStyle={wrapperStyle}
        items={results}
        getItemValue={item => item.nom}
        onSelect={(value, feature) => handleSelect(feature)}
        onChange={(e, value) => search(value)}
        renderItem={(item, isHighlighted) => (
          <div key={item.code} className={`item ${isHighlighted ? 'item-highlighted' : ''}`}>
            <div>
              <div className='label'>{item.nom}</div>
            </div>
            <div>{item.code}</div>
          </div>
        )}
        renderInput={props => <input className='search' {...props} placeholder={placeholder} />}
        renderMenu={(items, value) => (
          <div className={`menu ${value.length ? '' : 'hidden'}`}>
            { loading ? (
              <div className='item'><img src='../../static/loader.gif' /></div>
            ) : items.length === 0 ? (
              <div className='item'>Aucun résultat</div>
            ) : items}
          </div>
        )} />
      <style jsx>{`
        .search {
          background-color: ${theme.colors.white};
          border: 1px solid ${theme.border};
          border-radius: 2px 2px 2px 2px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) inset;
          color: rgba(0, 0, 0, 0.75);
          display: block;
          font-family: inherit;
          font-size: 14px;
          height: 56px;
          padding: 7px;
          width: 100%;
        }

        .menu {
          float: left;
          width: 100%;
          background-color: ${theme.colors.white};
          border: 1px solid ${theme.border};
          border-radius: 5px;
          outline: none;
        }

        .item {
          display: flex;
          flex-flow: row;
          justify-content: space-between;
          align-items: center;
          padding: 1em;
        }

        .item .label {
          font-weight: 600;
        }

        .item:hover {
          cursor: pointer;
        }

        .item-highlighted {
          background-color: ${theme.primary};
          color: ${theme.colors.white};
        }

        .hidden {
          display: none;
        }

        @media (max-width: 550px) {
          .wrap {
            width: 100%;
            top: 98px;
          }
        }
        `}</style>
    </div>
  )
}

SearchInput.propTypes = {
  results: PropTypes.array,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  search: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired
}

SearchInput.defaultProps = {
  results: [],
  value: '',
  placeholder: ''
}

export default SearchInput
