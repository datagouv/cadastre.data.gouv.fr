import React, {useState} from 'react'
import centersDeps from '../public/static/centers_deps.json'
import {publish} from '../lib/events.js'

const sortedDepartements = Object.entries(centersDeps)
  .sort(([codeA], [codeB]) => codeA.localeCompare(codeB))

function getCoordList(truegeometry) {
  let accumulator = []
  for (const coordinate of truegeometry.coordinates) {
    accumulator = [...accumulator, ...coordinate]
  }

  return accumulator
}

function bbox(truegeometryList) {
  const result = [Infinity, Infinity, -Infinity, -Infinity]
  for (const coord of truegeometryList) {
    if (result[0] > coord[0]) {
      result[0] = coord[0]
    }

    if (result[1] > coord[1]) {
      result[1] = coord[1]
    }

    if (result[2] < coord[0]) {
      result[2] = coord[0]
    }

    if (result[3] < coord[1]) {
      result[3] = coord[1]
    }
  }

  return result
}

function scaleBbox(bbox, scale) {
  const deltaX = bbox[2] - bbox[0]
  const deltaY = bbox[3] - bbox[1]
  const center = [bbox[0] + (0.5 * deltaX), bbox[1] + (0.5 * deltaY)]
  const scaledMinX = center[0] - (deltaX * scale / 2)
  const scaledMinY = center[1] - (deltaY * scale / 2)
  const scaledMaxX = center[0] + (deltaX * scale / 2)
  const scaledMaxY = center[1] + (deltaY * scale / 2)
  return [scaledMinX, scaledMinY, scaledMaxX, scaledMaxY]
}

const FilterBox = () => {
  const [open, setOpen] = useState(false)
  const [parcelleInputError, setParcelleInputError] = useState('')
  const [parcelleInput, setParcelleInput] = useState('')
  const [selectedDepartement, setSelectedDepartement] = useState('')
  const [selectedCommune, setSelectedCommune] = useState('')
  const [selectedArrondissement, setSelectedArrondissement] = useState('')
  const [selectedSection, setSelectedSection] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [selectedParcelle, setSelectedParcelle] = useState('')
  const [communes, setCommunes] = useState([])
  const [arrondissements, setArrondissements] = useState([])
  const [sections, setSections] = useState([])
  const [parcelles, setParcelles] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [departements, setDepartements] = useState(sortedDepartements)

  const toggle = () => {
    setOpen(!open)
  }

  const onParcelleInputChange = event => {
    setParcelleInput(event.target.value)
    setParcelleInputError('')

    if (event.target.value.length >= 14) {
      setSelectedParcelle(event.target.value)
      navigateToParcelle(event.target.value)
    }
  }

  const onDepartementChange = async event => {
    setSelectedDepartement(event.target.value)
    setSelectedCommune('')
    setSelectedArrondissement('')
    setSelectedSection('')
    setSelectedParcelle('')
    setCommunes([])
    setArrondissements([])
    setSections([])
    setParcelles([])
    const current = event.target.value
    if (current) {
      console.log('selectedDepartement', current)
      try {
        console.log(`https://geo.api.gouv.fr/departements/${current}/communes`)
        const response = await fetch(`https://geo.api.gouv.fr/departements/${current}/communes`)
        const communesReturned = await response.json()

        communesReturned.sort((a, b) => a.nom.localeCompare(b.nom))
        setCommunes(communesReturned)
      } catch (error) {
        console.error('Erreur lors du chargement des communes:', error)
      }
    }
  }

  const onCommuneChange = async event => {
    setSelectedCommune(event.target.value)
    setSelectedArrondissement('')
    setSelectedSection('')
    setSelectedParcelle('')
    setArrondissements([])
    setSections([])
    setParcelles([])
    const current = event.target.value
    if (current) {
      switch (current) {
        case '75056': {
          setArrondissements([
            {code: '75101', nom: 'Paris 1er'},
            {code: '75102', nom: 'Paris 2e'},
            {code: '75103', nom: 'Paris 3e'},
            {code: '75104', nom: 'Paris 4e'},
            {code: '75105', nom: 'Paris 5e'},
            {code: '75106', nom: 'Paris 6e'},
            {code: '75107', nom: 'Paris 7e'},
            {code: '75108', nom: 'Paris 8e'},
            {code: '75109', nom: 'Paris 9e'},
            {code: '75110', nom: 'Paris 10e'},
            {code: '75111', nom: 'Paris 11e'},
            {code: '75112', nom: 'Paris 12e'},
            {code: '75113', nom: 'Paris 13e'},
            {code: '75114', nom: 'Paris 14e'},
            {code: '75115', nom: 'Paris 15e'},
            {code: '75116', nom: 'Paris 16e'},
            {code: '75117', nom: 'Paris 17e'},
            {code: '75118', nom: 'Paris 18e'},
            {code: '75119', nom: 'Paris 19e'},
            {code: '75120', nom: 'Paris 20e'},
          ])
          break
        }

        case '69123': {
          setArrondissements([
            {code: '69381', nom: 'Lyon 1er'},
            {code: '69382', nom: 'Lyon 2e'},
            {code: '69383', nom: 'Lyon 3e'},
            {code: '69384', nom: 'Lyon 4e'},
            {code: '69385', nom: 'Lyon 5e'},
            {code: '69386', nom: 'Lyon 6e'},
            {code: '69387', nom: 'Lyon 7e'},
            {code: '69388', nom: 'Lyon 8e'},
            {code: '69389', nom: 'Lyon 9e'},
          ])
          break
        }

        case '13055': {
          setArrondissements([
            {code: '13201', nom: 'Marseille 1er'},
            {code: '13202', nom: 'Marseille 2e'},
            {code: '13203', nom: 'Marseille 3e'},
            {code: '13204', nom: 'Marseille 4e'},
            {code: '13205', nom: 'Marseille 5e'},
            {code: '13206', nom: 'Marseille 6e'},
            {code: '13207', nom: 'Marseille 7e'},
            {code: '13208', nom: 'Marseille 8e'},
            {code: '13209', nom: 'Marseille 9e'},
            {code: '13210', nom: 'Marseille 10e'},
            {code: '13211', nom: 'Marseille 11e'},
            {code: '13212', nom: 'Marseille 12e'},
            {code: '13213', nom: 'Marseille 13e'},
            {code: '13214', nom: 'Marseille 14e'},
            {code: '13215', nom: 'Marseille 15e'},
            {code: '13216', nom: 'Marseille 16e'},
          ])
          break
        }

        default: {
          try {
            const response = await fetch(`https://cadastre.data.gouv.fr/bundler/cadastre-etalab/communes/${current}/geojson/sections`)
            const data = await response.json()
            setSections(data.features || [])
          } catch (error) {
            console.error('Erreur lors du chargement des sections:', error)
          }
        }
      }
    }
  }

  const onArrondissementChange = async event => {
    setSelectedArrondissement(event.target.value)
    setSelectedSection('')
    setSelectedParcelle('')
    setSections([])
    setParcelles([])
    const current = event.target.value
    if (current) {
      try {
        const response = await fetch(`https://cadastre.data.gouv.fr/bundler/cadastre-etalab/communes/${current}/geojson/sections`)
        const data = await response.json()
        setSections(data.features || [])
      } catch (error) {
        console.error('Erreur lors du chargement des sections:', error)
      }
    }
  }

  const onSectionChange = async event => {
    setSelectedSection(event.target.value)
    setSelectedParcelle('')
    setParcelles([])
    const current = event.target.value
    if (current) {
      const communeCodeForApi = ((selectedCommune === '75056' || selectedCommune === '69123' || selectedCommune === '13055') && selectedArrondissement) ? selectedArrondissement : selectedCommune
      try {
        const response = await fetch(`https://cadastre.data.gouv.fr/bundler/cadastre-etalab/communes/${communeCodeForApi}/geojson/parcelles`)
        const data = await response.json()

        if (data.features && data.features.length > 0) {
          const communeCode = communeCodeForApi

          const parcellesList = data.features.filter(parcelle => {
            const parcelleId = parcelle.properties.id
            const matches = parcelleId.startsWith(communeCode + current)
            return matches
          })

          parcellesList.sort((a, b) => a.properties.id.localeCompare(b.properties.id))
          setParcelles(parcellesList)
        }
      } catch (error) {
        console.error('Erreur lors du chargement des parcelles:', error)
        setParcelles([])
      }
    }
  }

  const onParcelleChange = event => {
    setSelectedParcelle(event.target.value)
    const current = event.target.value
    console.log('onParcelleChange', current)
    if (current) {
      navigateToParcelle(current)
    }
  }

  //
  function navigateToParcelle(parcelleId) {
    getParcelleCoordinates(parcelleId)
  }

  function getParcelleCoordinates(parcelleId) {
    fetch(`https://data.geopf.fr/geocodage/search?index=parcel&returntruegeometry=true&q=${parcelleId}`)
      .then(response => response.json())
      .then(data => {
        if (data.features && data.features.length > 0) {
          const parcelle = data.features[0]

          console.log('parcelle', parcelle)

          publish('parcelles-info', {
            parcelleId,
            bbox: scaleBbox(bbox(getCoordList(parcelle.properties.truegeometry)), 2),
          })

          setParcelleInputError('')
        } else {
          setParcelleInputError('L\'identifiant de la parcelle n\'est pas valide')
        }
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des coordonnées de la parcelle:', error)
        setParcelleInputError('Erreur lors de la recherche de la parcelle')
      })
  }

  return (
    <div id='parcelleBox' className={open ? 'open' : ''}>
      <div className='filtersHeader' onClick={toggle}>
        <div> Rechercher par parcelle cadastrale </div>
        <div className='filtersIcon'>
          <svg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path fillRule='evenodd' clipRule='evenodd' d='M4.99999 3.78132L8.29999 0.481323L9.24266 1.42399L4.99999 5.66666L0.757324 1.42399L1.69999 0.481323L4.99999 3.78132Z' fill='#161616' />
          </svg>
        </div>
      </div>
      <div className='filtersBody'>
        <div className='parcelle-input-section'>
          <label className='filtersTitle'>Identifiant complet de la parcelle</label>
          <input type='text' placeholder='Ex: 740560000C0720' className='parcelle-input' onChange={onParcelleInputChange} value={parcelleInput} />
          { parcelleInputError ? <div className='parcelle-error'>
            {parcelleInputError}
          </div> : null }
        </div>
        <div className='parcelle-compose-section'>
          <div className='filtersTitle'>Ou composez-le pas à pas</div>
          <div className='select-group'>
            <label>Département</label>
            <select className='parcelle-select' onChange={onDepartementChange}>
              <option value=''>Sélectionner un département</option>
              {departements.map(([code, dept]) => (
                <option key={String(code)} value={String(code)}>{ String(code) } - { dept.nom }</option>
              ))}
            </select>
          </div>
          {selectedDepartement ? <div className='select-group'>
            <label>Commune</label>
            <select className='parcelle-select' onChange={onCommuneChange} disabled={communes.length === 0}>
              <option value=''>Sélectionner une commune</option>
              {communes.map(commune => (
                <option key={String(commune.code)} value={String(commune.code)}>
                  { commune.nom } ({ commune.code })
                </option>
              ))}
            </select>
          </div> : null }
          {selectedCommune === '75056' || selectedCommune === '69123' || selectedCommune === '13055' ? <div className='select-group'>
            <label>Arrondissement</label>
            <select onChange={onArrondissementChange} className='parcelle-select'>
              <option value=''>Sélectionner un arrondissement</option>
              {arrondissements.map(arrondissement => (
                <option key={String(arrondissement.code)} value={String(arrondissement.code)}>
                  { arrondissement.nom } ({ arrondissement.code })
                </option>
              ))}
            </select>
          </div> : null }
          {selectedCommune ? <div className='select-group'>
            <label>Section cadastrale</label>
            <select onChange={onSectionChange} className='parcelle-select' disabled={sections.length === 0}>
              <option value=''>Sélectionner une section</option>
              {sections.map(section => (
                <option key={section.properties.id.replace(section.properties.commune, '')} value={section.properties.id.replace(section.properties.commune, '')}>
                  { section.properties.id.replace(section.properties.commune, '') }{ section.properties.nom ? ' - ' + section.properties.nom : '' }
                </option>
              ))}
            </select>
          </div> : null}
          {selectedSection ? <div className='select-group'>
            <label>Parcelle ({ parcelles.length } trouvées)</label>
            <select onChange={onParcelleChange} className='parcelle-select' disabled={parcelles.length === 0}>
              <option value=''>Sélectionner une parcelle</option>
              {parcelles.map(parcelle => (
                <option key={parcelle.properties.id} value={parcelle.properties.id}>
                  { parcelle.properties.id }
                </option>
              ))}
            </select>
          </div> : null}
        </div>
      </div>
      <style jsx>{`
      #parcelleBox {
        width: 100%;
        height: 56px;
        background-color: white;
        transition: all 0.2s ease-in-out;
        overflow: hidden;
        border: 1px solid #adb9c9;
        border-radius: 2px 2px 2px 2px;
        box-shadow: 0 1px 2px rgba(0,0,0,0.1) inset;
        padding-bottom: 7px;
      }

      #parcelleBox.open {
        height: auto;
        border-bottom: 1px solid #e5e5e5;
      }

      .filtersHeader {
        width: 100%;
        height: 56px;
        position: relative;
        cursor: pointer;
        padding-left: 16px;
        border-bottom: 1px solid #e5e5e5;
      }

      .filtersHeader div {
        display: block;
        position: absolute;
        font-size: 14px;
        font-weight: 700;
        top: 50%;
        transform: translate(0, -50%);
      }

      .filtersHeader div span {
        color: #355ba2;
        font-size: 12px;
        display: inline-block;
        transform: translate(3px, -1px);
      }

      .filtersIcon {
        display: block;
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translate(0, -50%);
        transition: all 0.2s ease-in-out;
      }

      #parcelleBox.open .filtersIcon {
        transform: translate(0, -50%) rotate(180deg);
      }

      .filtersBody {
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 5px;
      }

      .filtersTitle {
        font-size: 12px;
        font-weight: 700;
        margin-top: 5px;
        margin-bottom: 5px;
        display: block;
      }

      .filter {
        font-size: 14px;
        font-weight: 400;
        display: block;
        cursor: pointer;
      }

      .filter div {
        width: 20px;
        height: 20px;
        border: 1px solid black;
        display: inline-block;
        border-radius: 50%;
        margin-right: 5px;
        transform: translate(0, 5px);
        position: relative;
      }

      .filter.selected div:before {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        background-color: #3558a2;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      .parcelle-input-section {
        margin-bottom: 15px;
      }

      .parcelle-input {
        width: 100%;
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 14px;
        margin-top: 5px;
      }

      .parcelle-error {
        color: #d7221f;
        font-size: 12px;
        margin-top: 5px;
        font-style: italic;
      }

      .parcelle-compose-section {
        margin-top: 15px;
      }

      .select-group {
        margin-bottom: 10px;
      }

      .select-group label {
        display: block;
        font-size: 12px;
        font-weight: 600;
        margin-bottom: 5px;
        color: #333;
      }

      .parcelle-select {
        width: 100%;
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 14px;
        background-color: white;
      }

      .parcelle-select:disabled {
        background-color: #f5f5f5;
        color: #999;
      }

      .loading-message {
        font-size: 12px;
        color: #666;
        font-style: italic;
        margin-top: 5px;
      }

      `}</style>
    </div>
  )
}

export default FilterBox
