import {join} from 'path'
import React from 'react'
import Router from 'next/router'

import theme from '../../styles/theme'

import DownloadForm from './download-form'
import DownloadButton from './download-button'

class DownloadAssistant extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: null,
      layer: null,
      territory: null,
      territoryType: null,
      format: null,
      url: null,
      downloadable: false,
      error: false
    }
  }

  toggleProduct(product) {
    this.setState({
      product: product === this.state.product ? null : product,
      layer: product.name === 'Cadastre Etalab' ? 'communes' : null,
      format: product.name === 'PCI Image' ? 'tiff' : null
    }, () => Router.push('/data/download-assistant#territory'))
  }

  toggleTerritoryType(territoryType) {
    this.setState({
      territoryType: territoryType === this.state.territoryType ? null : territoryType,
      territory: null
    })
  }

  toggleTerritory(territory) {
    this.setState({territory: territory === this.state.territory ? null : territory}, () => Router.push('/data/download-assistant#format'))
  }

  toggleFormat(format) {
    this.setState({format: format === this.state.format ? null : format}, () => Router.push('/data/download-assistant#download'))
  }

  toggleLayer(layer) {
    this.setState({layer})
  }

  constructUrl() {
    const {product, territoryType, territory, format, layer} = this.state
    const prd = product.name.toLowerCase().replace(' ', '-')
    const url = join('https://cadastre.data.gouv.fr/bundler', prd, territoryType.replace('é', 'e'), territory.code, format.replace('/', '-'))

    return layer ? join(url, layer) : url
  }

  toggleForm(formCompleted) {
    const {url, error} = this.state

    if (!formCompleted) {
      if (url || error) {
        this.setState({downloadable: false, url: null, error: null})
      }
    } else {
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
            this.setState({downloadable: false, error: true})
          })
      }
    }
  }

  render() {
    const {product, territoryType, territory, format, layer, url, downloadable, error} = this.state

    return (
      <div>
        <DownloadForm
          product={product}
          territoryType={territoryType}
          territory={territory}
          format={format}
          layer={layer}
          setLayer={layer => this.toggleLayer(layer)}
          setProduct={product => this.toggleProduct(product)}
          setTerritoryType={territoryType => this.toggleTerritoryType(territoryType)}
          setTerritory={territory => this.toggleTerritory(territory)}
          setFormat={format => this.toggleFormat(format)}
          formCompleted={formCompleted => this.toggleForm(formCompleted)} />

        {downloadable && <DownloadButton href={url} />}
        {error &&
          <div className='error-msg'>Il semblerait que cette ressource ne soit pas disponible.</div>
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

export default DownloadAssistant
