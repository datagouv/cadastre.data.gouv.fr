import qs from 'querystring'

const GEO_API_URL = process.env.NEXT_PUBLIC_API_GEO || 'https://geo.api.gouv.fr'

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
