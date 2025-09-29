export const downloadUrls = {
  current: 'https://cadastre.data.gouv.fr/data',
  old: 'https://files.data.gouv.fr/cadastre',
  minio: 'https://object.infra.data.gouv.fr/browser/cadastre',
}

export const millesimes = [
  {
    latest: true,
    date: '1er septembre 2025',
    path: '2025-09-01',
    baseUrl: downloadUrls.current,
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'epcis', 'departements']}
    ]
  },
  {
    date: '1er avril 2025',
    path: '2025-04-01',
    baseUrl: downloadUrls.current,
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']},
    ],
  },
  {
    date: '1er janvier 2025',
    path: '2025-01-01',
    baseUrl: downloadUrls.current,
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']},
    ],
  },
  {
    date: '1er octobre 2024',
    path: '2024-10-01',
    baseUrl: downloadUrls.current,
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']},
    ],
  },
  {
    date: '1er juillet 2024',
    path: '2024-07-01',
    baseUrl: downloadUrls.current,
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']},
    ],
  },
  {
    date: '1er avril 2024',
    path: '2024-04-01',
    baseUrl: downloadUrls.current,
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']},
    ],
  },
  {
    date: '1er janvier 2024',
    path: '2024-01-01',
    baseUrl: downloadUrls.current,
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']},
    ],
  },
  {
    date: '1er octobre 2023',
    path: '2023-10-01',
    baseUrl: downloadUrls.current,
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']},
    ],
  },
  {
    date: '1er juillet 2023',
    path: '2023-07-01',
    baseUrl: downloadUrls.current,
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']},
    ],
  },
  {
    date: '1er avril 2023',
    path: '2023-04-01',
    baseUrl: downloadUrls.current,
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'epcis', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']},
    ],
  },
  {
    date: '1er janvier 2023',
    path: '2023-01-01',
    baseUrl: downloadUrls.current,
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']},
    ],
  },
  {
    date: '1er octobre 2022',
    path: '2022-10-01',
    baseUrl: downloadUrls.current,
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']},
    ],
  },
  {
    date: '1er juillet 2022',
    path: '2022-07-01',
    baseUrl: downloadUrls.current,
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']},
    ],
  },
  {
    date: '1er avril 2022',
    path: '2022-04-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']},
    ],
  },
  {
    date: '1er janvier 2022',
    path: '2022-01-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']},
    ],
  },
  {
    date: '1er octobre 2021',
    path: '2021-10-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']},
    ],
  },
  {
    date: '1er juillet 2021',
    path: '2021-07-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']},
    ],
  },
  {
    date: '1er avril 2021',
    path: '2021-04-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']},
    ],
  },
  {
    date: '1er février 2021',
    path: '2021-02-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']},
    ],
  },
  {
    date: '1er octobre 2020',
    path: '2020-10-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']},
    ],
  },
  {
    date: '1er juillet 2020',
    path: '2020-07-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']},
    ],
  },
  {
    date: '1er janvier 2020',
    path: '2020-01-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']},
    ],
  },
  {
    date: '1er octobre 2019',
    path: '2019-10-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']},
    ],
  },
  {
    date: '1er juillet 2019',
    path: '2019-07-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']},
    ],
  },
  {
    date: '1er avril 2019',
    path: '2019-04-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']},
    ],
  },
  {
    date: '1er janvier 2019',
    path: '2019-01-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']},
    ],
  },
  {
    date: '1er octobre 2018',
    path: '2018-10-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']},
    ],
  },
  {
    date: '29 juin 2018',
    path: '2018-06-29',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']},
    ],
  },
  {
    date: '3 avril 2018',
    path: '2018-04-03',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']},
    ],
  },
  {
    date: '2 janvier 2018',
    path: '2018-01-02',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']},
      {name: 'edigeo-cc', granularities: ['feuilles', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'departements']},
      {name: 'dxf-cc', granularities: ['feuilles', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']},
    ],
  },
  {
    date: '12 octobre 2017',
    path: '2017-10-12',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']},
      {name: 'dxf', granularities: ['feuilles', 'departements']},
      {name: 'tiff', granularities: ['feuilles', 'departements']},
    ],
  },
  {
    date: '6 juillet 2017',
    path: '2017-07-06',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']},
    ],
  },
  {
    date: '14 mai 2017',
    path: '2017-05-14',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']},
    ],
  },
  {
    date: '13 février 2017',
    path: '2017-02-13',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'edigeo', granularities: ['feuilles', 'departements']},
    ],
  },
]

export function getUrl(baseUrl, path, selectedFormat, granularity) {
  return `${baseUrl}/${selectedFormat === 'tiff' ? 'dgfip-pci-image' : 'dgfip-pci-vecteur'}/${path}/${selectedFormat}/${granularity}`
}

export default millesimes

