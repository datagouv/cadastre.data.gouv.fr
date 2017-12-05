import {join} from 'path'
import React from 'react'
import Router from 'next/router'

import ButtonLink from '../button-link'
import Section from '../section'
import Step from '../step'
import Selector from '../selector'
import ProductSelection from './product-selection'
import TerritorySelection from './territory-selection'

class DownloadAssistant extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: null,
      layer: null,
      territory: null,
      territoryType: null,
      format: null
    }
  }

  setProduct(product) {
    this.setState({
      product: product === this.state.product ? null : product,
      layer: product.name === 'Cadastre Etalab' ? 'communes' : null,
      format: product.name === 'PCI Image' ? 'tiff' : null
    }, () => Router.push('/download-assistant#territory'))
  }

  setTerritoryType(territoryType) {
    this.setState({
      territoryType: territoryType === this.state.territoryType ? null : territoryType,
      territory: null
    })
  }

  setTerritory(territory) {
    this.setState({territory: territory === this.state.territory ? null : territory}, () => Router.push('/download-assistant#format'))
  }

  setFormat(format) {
    this.setState({format: format === this.state.format ? null : format}, () => Router.push('/download-assistant#download'))
  }

  toggleLayer(layer) {
    this.setState({layer})
  }

  isDownloadable() {
    const {product, territoryType, territory, format} = this.state
    return product && territoryType && territory && format
  }

  download() {
    const {product, territoryType, territory, format, layer} = this.state
    const prd = product.name.toLowerCase().replace(' ', '-')
    const url = join('http://cadastre.api.gouv.fr/', prd, territoryType.replace('é', 'e'), territory.code, format.replace('/', '-'))

    return layer ? join(url, layer) : url
  }

  render() {
    const {product, territoryType, territory, format, layer} = this.state

    return (
      <div>
        <Section>
          <h1>Assistant de téléchargement</h1>

          <Step id='product' title='1. Sélectionner un produit' disabled={false}>
            <ProductSelection
              productSelected={product}
              layer={layer}
              toggleLayer={layer => this.toggleLayer(layer)}
              selectProduct={product => this.setProduct(product)} />
          </Step>

          <Step id='territory' title='2. Sélectionner un territoire' disabled={Boolean(!product)}>
            <TerritorySelection
              territorySelected={territoryType}
              selectTerritoryType={territoryType => this.setTerritoryType(territoryType)}
              selectTerritory={territory => this.setTerritory(territory)} />
          </Step>

          <Step id='format' title='3. Sélectionner un format' disabled={Boolean(!territory)}>
            <Selector
              items={product && territory ? product.formats : []}
              selected={format}
              unavailable={['edigeo/cc']}
              uppercase
              onSelect={(format => this.setFormat(format))} />
          </Step>
        </Section>

        {this.isDownloadable() &&
          <div id='download' className='submit'>
            <ButtonLink href={this.download()}>
              Télécharger
            </ButtonLink>
          </div>
        }

        <style jsx>{`
          .submit {
            text-align: center;
            padding: 0 0 4em 0;
          }
          `}</style>
      </div>
    )
  }
}

export default DownloadAssistant
