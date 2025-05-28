export const downloadUrls = {
  current: 'https://cadastre.data.gouv.fr/data/etalab-cadastre',
  old: 'https://files.data.gouv.fr/cadastre/etalab-cadastre',
  minio: 'https://object.infra.data.gouv.fr/browser/cadastre/etalab-cadastre'
}

export const millesimes = [
  {
    latest: true,
    date: '1er avril 2025',
    path: '2025-04-01',
    baseUrl: downloadUrls.current,
    formats: [
      {name: 'geojson', granularities: ['communes', 'epcis', 'departements', 'france']},
      {name: 'shp', granularities: ['departements', 'france']},
      {name: 'mbtiles', granularities: ['france']}
    ]
  },
  {
    date: '1er janvier 2025',
    path: '2025-01-01',
    baseUrl: downloadUrls.current,
    formats: [
      {name: 'geojson', granularities: ['communes', 'epcis', 'departements', 'france']},
      {name: 'shp', granularities: ['departements', 'france']},
      {name: 'mbtiles', granularities: ['france']}
    ]
  },
  {
    date: '1er octobre 2024',
    path: '2024-10-01',
    baseUrl: downloadUrls.current,
    formats: [
      {name: 'geojson', granularities: ['communes', 'epcis', 'departements', 'france']},
      {name: 'shp', granularities: ['departements', 'france']},
      {name: 'mbtiles', granularities: ['france']}
    ]
  },
  {
    date: '1er juillet 2024',
    path: '2024-07-01',
    baseUrl: downloadUrls.current,
    formats: [
      {name: 'geojson', granularities: ['communes', 'epcis', 'departements', 'france']},
      {name: 'shp', granularities: ['departements', 'france']},
      {name: 'mbtiles', granularities: ['france']}
    ]
  },
  {
    date: '1er avril 2024',
    path: '2024-04-01',
    baseUrl: downloadUrls.current,
    formats: [
      {name: 'geojson', granularities: ['communes', 'epcis', 'departements', 'france']},
      {name: 'shp', granularities: ['departements', 'france']},
      {name: 'mbtiles', granularities: ['france']}
    ]
  },
  {
    date: '1er janvier 2024',
    path: '2024-01-01',
    baseUrl: downloadUrls.current,
    formats: [
      {name: 'geojson', granularities: ['communes', 'epcis', 'departements', 'france']},
      {name: 'shp', granularities: ['departements', 'france']},
      {name: 'mbtiles', granularities: ['france']}
    ]
  },
  {
    date: '1er octobre 2023',
    path: '2023-10-01',
    baseUrl: downloadUrls.current,
    formats: [
      {name: 'geojson', granularities: ['communes', 'epcis', 'departements', 'france']},
      {name: 'shp', granularities: ['departements', 'france']},
      {name: 'mbtiles', granularities: ['france']}
    ]
  },
  {
    date: '1er juillet 2023',
    path: '2023-07-01',
    baseUrl: downloadUrls.current,
    formats: [
      {name: 'geojson', granularities: ['communes', 'epcis', 'departements', 'france']},
      {name: 'shp', granularities: ['departements', 'france']},
      {name: 'mbtiles', granularities: ['france']}
    ]
  },
  {
    date: '1er avril 2023',
    path: '2023-04-01',
    baseUrl: downloadUrls.current,
    formats: [
      {name: 'geojson', granularities: ['communes', 'epcis', 'departements', 'france']},
      {name: 'shp', granularities: ['departements', 'france']},
      {name: 'mbtiles', granularities: ['france']}
    ]
  },
  {
    date: '1er janvier 2023',
    path: '2023-01-01',
    baseUrl: downloadUrls.current,
    formats: [
      {name: 'geojson', granularities: ['communes', 'departements', 'france']},
      {name: 'shp', granularities: ['departements', 'france']},
      {name: 'mbtiles', granularities: ['france']}
    ]
  },
  {
    date: '1er octobre 2022',
    path: '2022-10-01',
    baseUrl: downloadUrls.current,
    formats: [
      {name: 'geojson', granularities: ['communes', 'departements', 'france']},
      {name: 'shp', granularities: ['departements', 'france']},
      {name: 'mbtiles', granularities: ['france']}
    ]
  },
  {
    date: '1er juillet 2022',
    path: '2022-07-01',
    baseUrl: downloadUrls.current,
    formats: [
      {name: 'geojson', granularities: ['communes', 'departements', 'france']},
      {name: 'shp', granularities: ['departements', 'france']},
      {name: 'mbtiles', granularities: ['france']}
    ]
  },
  {
    date: '1er avril 2022',
    path: '2022-04-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'geojson', granularities: ['communes']},
      {name: 'shp', granularities: ['departements', 'france']},
      {name: 'mbtiles', granularities: ['france']}
    ]
  },
  {
    date: '1er janvier 2022',
    path: '2022-01-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'geojson', granularities: ['communes']},
      {name: 'shp', granularities: ['departements', 'france']},
      {name: 'mbtiles', granularities: ['france']}
    ]
  },
  {
    date: '1er octobre 2021',
    path: '2021-10-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'geojson', granularities: ['communes']},
      {name: 'shp', granularities: ['departements', 'france']},
      {name: 'mbtiles', granularities: ['france']}
    ]
  },
  {
    date: '1er juillet 2021',
    path: '2021-07-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'geojson', granularities: ['communes']},
      {name: 'shp', granularities: ['departements', 'france']},
      {name: 'mbtiles', granularities: ['france']}
    ]
  },
  {
    date: '1er avril 2021',
    path: '2021-04-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'geojson', granularities: ['communes']},
      {name: 'shp', granularities: ['departements', 'france']},
      {name: 'mbtiles', granularities: ['france']}
    ]
  },
  {
    date: '1er février 2021',
    path: '2021-02-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'geojson', granularities: ['communes']},
      {name: 'shp', granularities: ['departements', 'france']},
      {name: 'mbtiles', granularities: ['france']}
    ]
  },
  {
    date: '1er octobre 2020',
    path: '2020-10-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'geojson', granularities: ['communes']},
      {name: 'shp', granularities: ['departements', 'france']}
    ]
  },
  {
    date: '1er juillet 2020',
    path: '2020-07-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'geojson', granularities: ['communes']},
      {name: 'shp', granularities: ['departements', 'france']}
    ]
  },
  {
    date: '1er janvier 2020',
    path: '2020-01-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'geojson', granularities: ['communes']},
      {name: 'shp', granularities: ['departements', 'france']}
    ]
  },
  {
    date: '1er octobre 2019',
    path: '2019-10-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'geojson', granularities: ['communes']},
      {name: 'shp', granularities: ['departements', 'france']}
    ]
  },
  {
    date: '1er juillet 2019',
    path: '2019-07-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'geojson', granularities: ['communes']},
      {name: 'shp', granularities: ['departements', 'france']}
    ]
  },
  {
    date: '1er avril 2019',
    path: '2019-04-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'geojson', granularities: ['communes']},
      {name: 'shp', granularities: ['departements', 'france']}
    ]
  },
  {
    date: '1er janvier 2019',
    path: '2019-01-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'geojson', granularities: ['communes']},
      {name: 'shp', granularities: ['departements', 'france']}
    ]
  },
  {
    date: '1er octobre 2018',
    path: '2018-10-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'geojson', granularities: ['communes']},
      {name: 'shp', granularities: ['departements', 'france']}
    ]
  },
  {
    date: '29 juin 2018',
    path: '2018-06-29',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'geojson', granularities: ['communes']},
      {name: 'shp', granularities: ['departements', 'france']}
    ]
  },
  {
    date: '3 avril 2018',
    path: '2018-04-03',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'geojson', granularities: ['communes']},
      {name: 'shp', granularities: ['departements', 'france']}
    ]
  },
  {
    date: '2 janvier 2018',
    path: '2018-01-02',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'geojson', granularities: ['communes']}
    ]
  },
  {
    date: '12 octobre 2017',
    path: '2017-10-12',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'geojson', granularities: ['communes']}
    ]
  },
  {
    date: '6 juillet 2017',
    path: '2017-07-06',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'geojson', granularities: ['communes']}
    ]
  }
]
export function getUrl(baseUrl, path, selectedFormat, granularity) {
  return `${baseUrl}/${path}/${selectedFormat}/${granularity}`
}

export default millesimes
