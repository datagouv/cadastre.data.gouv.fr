import HttpError from './http-error.js'

const API_ADRESSE
  = process.env.NEXT_PUBLIC_API_ADRESSE || 'https://data.geopf.fr/geocodage'

async function _fetch(url) {
  const options = {
    mode: 'cors',
    method: 'GET',
  }

  const response = await fetch(url, options)
  const contentType = response.headers.get('content-type')

  if (!response.ok) {
    throw new HttpError(response)
  }

  if (response.ok && contentType && contentType.includes('application/json')) {
    return response.json()
  }

  throw new Error('Une erreur est survenue')
}

export function search(arguments_) {
  const {q, lng, lat} = arguments_
  let url = `${API_ADRESSE}/search/?q=${q}`

  if (lng && lat) {
    url += `&lng=${lng}&lat=${lat}`
  }

  return _fetch(url)
}
