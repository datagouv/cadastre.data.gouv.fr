import HttpError from './http-error'

const API_ADRESSE =
  process.env.NEXT_PUBLIC_API_ADRESSE || 'https://api-adresse.data.gouv.fr'

async function _fetch(url) {
  const options = {
    mode: 'cors',
    method: 'GET'
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

export function search(args) {
  const {q, lng, lat} = args
  let url = `${API_ADRESSE}/search/?q=${q}`

  if (lng && lat) {
    url += `&lng=${lng}&lat=${lat}`
  }

  return _fetch(url)
}
