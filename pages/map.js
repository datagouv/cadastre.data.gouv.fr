import React, {useState, useCallback, useEffect} from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import mapStyle from 'maplibre-gl/dist/maplibre-gl.css'
import Head from 'next/head'

import MapComponent from '../components/react-map-gl'

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

function MapPage({hideBati = true, defaultParcelleId = null, defaultStyle = 'ortho'}) {
  const [input, setInput] = useInput('')
  const [placeholder, setPlaceholder] = useInput('Rechercher une adresse')
  const [results, setResults] = useState([])

  const [viewState, setViewState] = useState(defaultViewport)
  const [isTouchScreenDevice, setIsTouchScreenDevice] = useState(false)
  const [showBati, setShowBati] = useState(!hideBati)
  const [style, setStyle] = useState(defaultStyle)
  const [parcelle, setParcelle] = useState(defaultParcelleId ? {id: defaultParcelleId} : null)

  const debouncedInput = useDebounce(input, 400)

  const handleSelect = address => {
    const {label} = address.properties
    const [longitude, latitude] = address.geometry.coordinates
    const zoom = zoomLevel[address.properties.type]

    setViewState({zoom, longitude, latitude})
    setInput('')
    setPlaceholder(label)
    setParcelle(null)
  }

  const searchAddress = useCallback(async () => {
    const results = await search({q: debouncedInput})
    setResults(results.features)
  }, [debouncedInput])

  useEffect(() => {
    Router.push({
      pathname: '/map',
      query: Object.fromEntries(Object.entries({
        ...Router.query,
        parcelleId: parcelle ? parcelle.id : null,
        hideBati: !showBati,
        style
      }).filter(([k,v]) => v)),
      hash: window.location.hash
    })
  }, [showBati, parcelle, style])

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

        setViewState({
          latitude: Number(lat),
          longitude: Number(lng),
          zoom: Number(zoom)
        })
      }
    }
  }, [])

  useEffect(() => {
    setIsTouchScreenDevice('ontouchstart' in document.documentElement)
  }, [])

  return (
    <Page title={title} description={description} fullscreen>
      <Head>
        <style key='maplibre'
          dangerouslySetInnerHTML={{__html: mapStyle}} // eslint-disable-line react/no-danger
        />
      </Head>
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
          {parcelle && parcelle.section && (
            <div className='info-panel'>
              <Parcelle
                parcelle={parcelle}
                close={() => setParcelle(null)}
              />
            </div>
          )}
        </div>

        <div className='map-container'>
          <MapComponent
            viewState={viewState}
            onMove={evt => {
              let {zoom, latitude, longitude} = evt.viewState
              zoom = Math.round(zoom * 100) / 100
              // Derived from equation: 512px * 2^z / 360 / 10^d < 0.5px
              const precision = Math.ceil(((zoom * Math.LN2) + Math.log(512 / 360 / 0.5)) / Math.LN10)
              const m = 10 ** precision
              longitude = Math.round(longitude * m) / m
              latitude = Math.round(latitude * m) / m
              Router.push({
                pathname: '/map',
                query: pickBy({
                  ...Router.query,
                  parcelleId: parcelle ? parcelle.id : null,
                  hideBati: !showBati,
                  style
                }, identity),
                hash: `#${zoom}/${latitude}/${longitude}`
              })
              return setViewState(evt.viewState)
            }}
            showBati={showBati}
            isTouchScreenDevice={isTouchScreenDevice}
            toggleBati={() => setShowBati(!showBati)}
            style={style}
            changeStyle={() => setStyle(style === 'vector' ? 'ortho' : 'vector')}
            selectedParcelle={parcelle}
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

MapPage.getInitialProps = async ({query}) => {
  const {parcelleId, hideBati, style} = query

  return {
    defaultParcelleId: parcelleId,
    hideBati: (hideBati && hideBati === 'true') || false,
    defaultStyle: style
  }
}

export default MapPage
