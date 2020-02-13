import React, {useState, useCallback, useEffect} from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import {pickBy, identity} from 'lodash'

import Map from '../components/react-map-gl'

import {useInput} from '../components/hooks/input'
import useDebounce from '../components/hooks/debounce'

import {search} from '../lib/api-adresse'

import Page from '../layouts/main'

import SearchInput from '../components/search-input'
import renderAddress from '../components/search-input/render-address'

import Parcelle from '../components/map/parcelle'

const title = 'Carte interactive'
const description = 'Consulter les données cadastrales'

const zoomLevel = {
  street: 16,
  locality: 17,
  housenumber: 18,
  municipality: 13
}

const defaultViewport = {
  latitude: 46.9,
  longitude: 1.7,
  zoom: 5
}

const MapPage = ({hideBati, defaultParcelleId, defaultStyle}) => {
  const [input, setInput] = useInput('')
  const [placeholder, setPlaceholder] = useInput('Rechercher une adresse')
  const [results, setResults] = useState([])

  const [viewport, setViewport] = useState(defaultViewport)
  const [showBati, setShowBati] = useState(!hideBati)
  const [style, setStyle] = useState(defaultStyle)
  const [parcelle, setParcelle] = useState(null)
  const [parcelleId, setParcelleId] = useState(defaultParcelleId)

  const debouncedInput = useDebounce(input, 400)

  const handleSelect = address => {
    const {label} = address.properties
    const [longitude, latitude] = address.geometry.coordinates
    const zoom = zoomLevel[address.properties.type]

    setViewport({zoom, longitude, latitude})
    setInput('')
    setPlaceholder(label)
    setParcelleId(null)
    setParcelle(null)
  }

  const searchAddress = useCallback(async () => {
    const results = await search({q: debouncedInput})
    setResults(results.features)
  }, [debouncedInput])

  useEffect(() => {
    if (parcelle) {
      setParcelleId(parcelle ? parcelle.featureId : null)
    } else if (!parcelle && parcelleId !== defaultParcelleId) { // Prevent override defaultParcelleId when parcelle is null
      setParcelleId(null)
    }
  }, [defaultParcelleId, parcelle, parcelleId])

  useEffect(() => {
    Router.push({
      pathname: '/map',
      query: pickBy({
        ...Router.query,
        parcelleId,
        hideBati: !showBati,
        style
      }, identity),
      hash: window.location.hash
    })
  }, [showBati, parcelleId, style])

  useEffect(() => {
    if (debouncedInput.length > 0) {
      searchAddress()
    }
  }, [debouncedInput, searchAddress])

  useEffect(() => {
    if (window.location && window.location.hash) {
      const {hash} = window.location

      if (hash !== '#8/0/0') { // Prevent map init to override hash
        const [zoom, lat, lng] = hash.replace('#', '').split('/')

        setViewport({
          latitude: Number(lat),
          longitude: Number(lng),
          zoom: Number(zoom)
        })
      }
    }
  }, [])

  return (
    <Page title={title} description={description} fullscreen>
      <div className='interactive-map'>
        <div className='input'>
          <SearchInput
            value={input}
            results={results}
            placeholder={placeholder}
            onSelect={handleSelect}
            onSearch={setInput}
            renderItem={renderAddress}
            getItemValue={item => item.properties.context}
            fullscreen
          />
          {parcelle && (
            <div className='info-panel'>
              <Parcelle
                parcelle={parcelle}
                close={() => setParcelle(null)}
              />
            </div>
          )}
        </div>

        <div className='map-container'>
          <Map
            viewport={viewport}
            showBati={showBati}
            toggleBati={() => setShowBati(!showBati)}
            style={style}
            changeStyle={() => setStyle(style === 'vector' ? 'ortho' : 'vector')}
            onViewportChange={setViewport}
            selectedParcelleId={parcelleId}
            selectParcelle={setParcelle}
          />
        </div>
      </div>

      <style jsx>{`
        .interactive-map {
          position: absolute;
          top: 72px;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          overflow: hidden;
        }

        .input {
          z-index: 5;
          position: absolute;
          margin: 10px 0 0 10px;
          width: 400px;
        }

        .map-container {
          height: 100%;
        }

        .info-panel {
          margin-top: 0.2em;
        }

        @media (max-width: 470px) {
          .input {
            width: calc(100% - 55px);
          }

          .info-panel {
            z-index: 10;
            position: fixed;
            top: 66px;
            bottom: 0;
            left: 0;
            right: 0;
            margin: 0;
            padding: 0;
          }
        }
      `}</style>
    </Page>

  )
}

MapPage.propTypes = {
  hideBati: PropTypes.bool,
  defaultParcelleId: PropTypes.string,
  defaultStyle: PropTypes.string
}

MapPage.defaultProps = {
  hideBati: true,
  defaultParcelleId: null,
  defaultStyle: 'ortho'
}

MapPage.getInitialProps = async ({query}) => {
  const {parcelleId, hideBati, style} = query

  return {
    defaultParcelleId: parcelleId,
    hideBati: (hideBati && hideBati === 'true') || false,
    defaultStyle: style
  }
}

export default MapPage
