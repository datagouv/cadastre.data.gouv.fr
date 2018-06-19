import PropTypes from 'prop-types'
import React from 'react'

import theme from '../../styles/theme'

import DownloadForm from './download-form'
import DownloadButton from './download-button'

class DownloadAssistant extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: props.productList.length === 1 ? props.productList[0] : null,
      layer: props.productList[0].layers ? props.productList[0].layers[0] : null,
      territory: null,
      territoryType: null,
      format: null,
      url: null,
      downloadable: false,
      error: false
    }

    this.toggleProduct = this.toggleProduct.bind(this)
    this.toggleTerritoryType = this.toggleTerritoryType.bind(this)
    this.toggleTerritory = this.toggleTerritory.bind(this)
    this.toggleFormat = this.toggleFormat.bind(this)
    this.toggleLayer = this.toggleLayer.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
  }

  toggleProduct(product) {
    this.setState(state => {
      return {
        product: product === state.product ? null : product,
        format: product.formats.length === 1 ? product.formats[0] : null
      }
    })
  }

  toggleTerritoryType(territoryType) {
    this.setState(state => {
      return {
        territoryType: territoryType === state.territoryType ? null : territoryType,
        territory: null
      }
    })
  }

  toggleTerritory(territory) {
    this.setState(state => {
      return {
        territory: territory === state.territory ? null : territory
      }
    })
  }

  toggleFormat(format) {
    this.setState(state => {
      return {
        format: format === state.format ? null : format
      }
    })
  }

  toggleLayer(layer) {
    this.setState({layer})
  }

  constructUrl() {
    const {product, territoryType, territory, format, layer} = this.state
    let url = [
      'https://cadastre.data.gouv.fr/bundler',
      product.name.toLowerCase().replace(' ', '-'),
      territoryType.replace('é', 'e'),
      territory.code,
      format.replace('/', '-')
    ].join('/')

    if (layer) {
      url += `/${layer}`
    }

    return url
  }

  toggleForm(formCompleted) {
    const {url, error} = this.state

    if (formCompleted) {
      const newUrl = this.constructUrl()

      if ((!url || newUrl !== url) && !error) {
        fetch(newUrl, {method: 'HEAD'})
          .then(response => {
            if (response.status === 200) {
              this.setState({url: newUrl, downloadable: true})
            } else {
              this.setState({downloadable: false, error: true})
            }
          })
          .catch(err => {
            this.setState({downloadable: false, error: err})
          })
      }
    } else if (url || error) {
      this.setState({downloadable: false, url: null, error: null})
    }
  }

  render() {
    const {productList} = this.props
    const {product, territoryType, territory, format, layer, url, downloadable, error} = this.state

    return (
      <div className='download-wizard'>
        <DownloadForm
          productList={productList}
          product={product}
          territoryType={territoryType}
          territory={territory}
          format={format}
          layer={layer}
          setLayer={this.toggleLayer}
          setProduct={this.toggleProduct}
          setTerritoryType={this.toggleTerritoryType}
          setTerritory={this.toggleTerritory}
          setFormat={this.toggleFormat}
          formCompleted={this.toggleForm} />

        {downloadable && <DownloadButton href={url} />}
        {error &&
          <div className='error-msg'>Cette ressource n’est pas disponible sur ce territoire.</div>
        }

        <style jsx>{`
          .download-wizard {
            padding: 1em 2em;
            box-shadow: 0 1px 4px ${theme.boxShadow};
          }

          .error-msg {
            text-align: center;
            padding: 1em;
            color: ${theme.colors.red};
            border: 1px solid ${theme.colors.red};
          }
        `}</style>
      </div>
    )
  }
}

DownloadAssistant.propTypes = {
  productList: PropTypes.array.isRequired
}

export default DownloadAssistant
