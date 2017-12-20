import React from 'react'
import PropTypes from 'prop-types'
import debounce from 'debounce'

import SearchInput from './search-input'

class ApiGeo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      results: [],
      loading: false,
      territoryType: props.territoryType
    }

    this.updateValue = this.updateValue.bind(this)
    this.search = this.search.bind(this)
    this.selectTerritory = this.selectTerritory.bind(this)

    this.search = debounce(this.search, 200)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.territoryType !== this.state.territoryType) {
      this.setState({
        territoryType: nextProps.territoryType,
        value: ''
      })
    }
  }

  updateValue(value) {
    const {territoryType} = this.props
    const url = `https://geo.api.gouv.fr/${territoryType.replace('é', 'e')}?nom=${value}&boost=population`

    this.setState({value, results: [], loading: true}, this.search(url))
  }

  search(url) {
    const options = {
      headers: {
        Accept: 'application/json'
      },
      mode: 'cors',
      method: 'GET'
    }

    fetch(url, options).then(response => {
      const contentType = response.headers.get('content-type')
      if (contentType && contentType.indexOf('application/json') !== -1) {
        response.json().then(json => {
          this.setState({
            results: json || [],
            loading: false
          })
        })
      } else {
        this.setState({
          results: [],
          loading: false
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
    const placeholder = territoryType === 'communes' ?
      'Taper le nom de la commune' :
      'Taper le nom du département'

    return (
      <div>
        <SearchInput
          value={value}
          results={results}
          loading={loading}
          placeholder={placeholder}
          search={this.updateValue}
          handleSelect={this.selectTerritory} />
      </div>
    )
  }
}

ApiGeo.propTypes = {
  onSelect: PropTypes.func.isRequired,
  territoryType: PropTypes.string.isRequired
}

export default ApiGeo
