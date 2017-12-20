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
      layer: props.productList[0].name === 'Cadastre Etalab' ? 'communes' : null,
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
    this.setState({
      product: product === this.state.product ? null : product,
      layer: product.name === 'Cadastre Etalab' ? 'communes' : null,
      format: product.name === 'PCI Image' ? 'tiff' : null
    })
  }

  toggleTerritoryType(territoryType) {
    this.setState({
      territoryType: territoryType === this.state.territoryType ? null : territoryType,
      territory: null
    })
  }

  toggleTerritory(territory) {
    this.setState({territory: territory === this.state.territory ? null : territory})
  }

  toggleFormat(format) {
    this.setState({format: format === this.state.format ? null : format})
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
      <div>
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
          .error-msg {
            margin: 0 auto 2em;
            padding: 2em;
            color: ${theme.colors.red};
            border: 1px solid ${theme.colors.red};
            width: 368px;
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
