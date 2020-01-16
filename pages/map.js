import React, {useState, useCallback, useEffect} from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import {debounce} from 'lodash'

import {useInput} from '../components/hooks/input'
import {search} from '../lib/api-adresse'

import Page from '../layouts/main'

import Map from '../components/map'
import SearchInput from '../components/search-input'
import renderAddress from '../components/search-input/render-address'

const title = 'Carte interactive'
const description = 'Cherchez des adresses et lieux-dits.'

const zoomLevel = {
  street: 16,
  housenumber: 18,
  locality: 15
}

const MapPage = ({defaultInput}) => {
  const [input, setInput] = useInput(defaultInput)
  const [center, setCenter] = useState()
  const [zoom, setZoom] = useState()
  const [placeholder, setPlaceholder] = useInput(defaultInput)
  const [results, setResults] = useState([])

  const handleSelect = address => {
    const {label} = address.properties
    const coords = address.geometry.coordinates
    const zoom = zoomLevel[address.properties.type]

    setCenter(coords)
    setZoom(zoom)
    setInput('')
    setPlaceholder(label)

    Router.push(`/map?q=${input}`)
  }

  const searchAddress = useCallback(debounce(async () => {
    const results = await search({q: input})
    setResults(results.features)
  }), [input])

  useEffect(() => {
    if (input.length > 0) {
      searchAddress()
    }
  }, [input, searchAddress])

  return (
    <Page title={title} description={description} hasFooter={false}>
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
        </div>

        <Map center={center} zoom={zoom} />
      </div>

      <style jsx>{`
        .interactive-map {
          position: relative;
        }

        .input {
          z-index: 999;
          width: 40%;
          min-width: 260px;
          position: absolute;
          top: 16px;
          left: 50%;
          transform: translate(-50%);
        }

        @media (max-width: 700px) {
          .input {
            min-width: 100%;
            top: 0;
            left: 0;
            transform: none;
          }
        }
      `}</style>
    </Page>
  )
}

MapPage.propTypes = {
  defaultInput: PropTypes.string
}

MapPage.defaultProps = {
  defaultInput: null
}

MapPage.getInitialProps = async ({query}) => {
  const {q} = query

  return {
    defaultInput: q
  }
}

export default MapPage
