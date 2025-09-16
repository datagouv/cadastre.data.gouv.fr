import React from 'react'
import PropTypes from 'prop-types'
import debounce from 'debounce'
import theme from '../styles/theme.js'
import SearchInput from './search-input.js'

const placeHoldersDependingOnLevel = {
  communes: 'Taper le nom de la commune',
  epcis: 'Taper le nom de l\'EPCI',
  département: 'Taper le nom du département',
}

class ApiGeo extends React.Component {
  constructor(properties) {
    super(properties)
    this.state = {
      value: '',
      results: [],
      loading: false,
    }

    this.updateValue = this.updateValue.bind(this)
    this.search = this.search.bind(this)
    this.selectTerritory = this.selectTerritory.bind(this)

    this.search = debounce(this.search, 200)
  }

  updateValue(value) {
    const {territoryType} = this.props
    const field = territoryType === 'communes' ? 'departement' : 'region'
    const optionalParameter = territoryType === 'communes' ? '&type=arrondissement-municipal,commune-actuelle' : ''
    const url = `https://geo.api.gouv.fr/${territoryType.replace('é', 'e')}?nom=${value}&fields=${field}&boost=population${optionalParameter}`
    this.setState({value, results: [], loading: true}, this.search(url))
  }

  componentDidUpdate(previousProperties) {
    if (this.props.territoryType !== previousProperties.territoryType) {
      this.clearInput()
    }
  }

  clearInput() {
    this.setState({value: ''})
  }

  getItemValue(item) {
    return item.nom
  }

  renderItem(item, isHighlighted) {
    let description

    if (item.departement) {
      description = `${item.departement.nom} - ${item.departement.code}`
    } else if (item.region) {
      description = item.region.nom
    } else if (item.code && item.code.length === 9) {
      description = 'EPCI'
    } else {
      description = 'Collectivité d’outre-mer'
    }

    return (
      <div key={item.code} className={`item ${isHighlighted ? 'item-highlighted' : ''}`}>
        <div>{item.nom}</div>
        <div>{description}</div>
        <style jsx>{`
          .item {
            display: flex;
            flex-flow: row;
            justify-content: space-between;
            align-items: center;
            padding: 1em;
            border-bottom: 1px solid whitesmoke;
          }

          .item:hover {
            cursor: pointer;
          }

          .item-highlighted {
            background-color: ${theme.primary};
            color: ${theme.colors.white};
          }
        `}</style>
      </div>
    )
  }

  search(url) {
    const options = {
      headers: {
        Accept: 'application/json',
      },
      mode: 'cors',
      method: 'GET',
    }

    fetch(url, options).then(response => {
      const contentType = response.headers.get('content-type')
      if (contentType && contentType.includes('application/json')) {
        response.json().then(json => {
          this.setState({
            results: json.splice(0, 10) || [],
            loading: false,
          })
        })
      } else {
        this.setState({
          results: [],
          loading: false,
        })
      }
    })
  }

  selectTerritory(territory) {
    const {onSelect} = this.props
    this.setState({value: territory.nom})
    onSelect(territory)
  }

  render() {
    const {territoryType} = this.props
    const {value, loading, results} = this.state
    const placeholder = placeHoldersDependingOnLevel[territoryType]

    return (
      <SearchInput
        value={value}
        results={results}
        isLoading={loading}
        placeholder={placeholder}
        renderItem={this.renderItem}
        getItemValue={this.getItemValue}
        onSearch={this.updateValue}
        onSelect={this.selectTerritory} />
    )
  }
}

ApiGeo.propTypes = {
  onSelect: PropTypes.func.isRequired,
  territoryType: PropTypes.string.isRequired,
}

export default ApiGeo
