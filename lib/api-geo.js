import qs from 'querystring'
import fetch from 'isomorphic-unfetch'
import getConfig from 'next/config'

const {publicRuntimeConfig} = getConfig()
const GEO_API_URL = publicRuntimeConfig.GEO_API_URL || 'https://geo.api.gouv.fr'

async function request(url, options) {
  const res = await fetch(`${GEO_API_URL}${url}`, options)
  if (!res.ok) {
    throw new Error('Erreur inattendue')
  }

  return res.json()
}

export function getCommune(code, options = {}) {
  return request(`/communes/${code}?${qs.stringify(options)}`)
}
