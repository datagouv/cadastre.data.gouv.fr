import React from 'react'
import Link from 'next/link'
import parse from 'html-react-parser'
import Section from './section'
import Millesimes from './millesimes'
import WrapperShowHide from './wrapper-show-hide'
import DownloadAssistant from './download-assistant/download-assistant'

const historique = [
  ['30/09/2017', 'première diffusion des données'],
  ['08/11/2017', 'nouveau millésime PCI + correction projection Saint-Barthelemy et Saint-Martin + intégration données Strasbourg + corrections diverses (<a href=\'https://github.com/etalab/cadastre/issues?q=is%3Aclosed+label%3A%22cadastre+data%22+is%3Aissue+milestone%3A%22Sprint+%232%22\' rel=\'nofollow\'>détails</a>)'],
  ['07/02/2018', 'nouveau millésime PCI + nouvelles données Strasbourg + ajout des lieux-dits + amélioration des géométries + corrections diverses (<a href=\'https://github.com/etalab/cadastre/issues?q=milestone%3A%22Livraison+01%2F2018%22+label%3A%22cadastre+data%22+is%3Aclosed\' rel=\'nofollow\'>détails</a>)'],
  ['20/05/2018', 'nouveau millésime PCI + ajout des subdivisions fiscales et des préfixes de sections + ajout des assemblages nationaux + ajout du format Shapefile + corrections diverses (<a href=\'https://github.com/etalab/cadastre/milestone/5?closed=1\'>détails</a>)'],
  ['16/07/2018', 'nouveau millésime PCI + corrections diverses (<a href=\'https://github.com/etalab/cadastre/milestone/6?closed=1\'>détails</a>)'],
  ['31/10/2018', 'nouveau millésime PCI + nouvelles données Strasbourg'],
  ['29/01/2019', 'nouveau millésime PCI + nouvelles données Strasbourg'],
  ['27/04/2019', 'nouveau millésime PCI + nouvelles données Strasbourg'],
  ['25/07/2019', 'nouveau millésime PCI + nouvelles données Strasbourg + ajout du champ ‘arpente’ (<a href=\'https://github.com/etalab/cadastre/issues/80\'>détails</a>)'],
  ['18/10/2019', 'nouveau millésime PCI + nouvelles données Strasbourg'],
  ['13/02/2020', 'nouveau millésime PCI + nouvelles données Strasbourg'],
  ['08/09/2020', 'nouveau millésime PCI juillet 2020 + nouvelles données Strasbourg'],
  ['16/11/2020', 'nouveau millésime PCI octobre 2020 + nouvelles données Strasbourg'],
  ['12/03/2021', 'nouveau millésime PCI février 2021 + nouvelles données Strasbourg'],
  ['21/06/2021', 'nouveau millésime PCI avril 2021 + nouvelles données Strasbourg'],
  ['11/09/2021', 'nouveau millésime PCI juillet 2021 + nouvelles données Strasbourg'],
  ['13/12/2021', 'nouveau millésime PCI octobre 2021 + nouvelles données Strasbourg'],
  ['19/02/2022', 'nouveau millésime PCI janvier 2022 + nouvelles données Strasbourg'],
  ['29/04/2022', 'nouveau millésime PCI avril 2022 + nouvelles données Strasbourg + corrections sur génération des contours communaux'],
  ['22/09/2022', 'nouveau millésime PCI juillet 2022 + nouvelles données Strasbourg'],
  ['03/11/2022', 'nouveau millésime PCI octobre 2022 + nouvelles données Strasbourg'],
  ['30/01/2023', 'nouveau millésime PCI janvier 2023 + nouvelles données Strasbourg'],
  ['21/04/2023', 'nouveau millésime PCI avril 2023 + nouvelles données Strasbourg'],
  ['31/07/2023', 'nouveau millésime PCI juillet 2023 + nouvelles données Strasbourg']
]
const listItemsHistorique = historique.slice().reverse().map(([dateMaj, comment]) => <li key={dateMaj}>{dateMaj} : {parse(comment)}</li>)

const products = [
  {
    name: 'Cadastre Etalab',
    formats: [
      'geojson',
      'geojson/gz',
      'shp'
    ],
    layers: [
      'communes',
      'prefixes_sections',
      'sections',
      'feuilles',
      'lieux_dits',
      'parcelles',
      'subdivisions_fiscales',
      'batiments'
    ]
  }
]

const downloadUrls = {
  current: 'https://cadastre.data.gouv.fr/data/etalab-cadastre',
  old: 'https://files.data.gouv.fr/cadastre/etalab-cadastre'
}

const millesimes = [
  {
    latest: true,
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
    baseUrl: downloadUrls.current,
    formats: [
      {name: 'geojson', granularities: ['communes', 'departements', 'france']},
      {name: 'shp', granularities: ['departements', 'france']},
      {name: 'mbtiles', granularities: ['france']}
    ]
  },
  {
    date: '1er janvier 2022',
    path: '2022-01-01',
    baseUrl: downloadUrls.current,
    formats: [
      {name: 'geojson', granularities: ['communes', 'departements', 'france']},
      {name: 'shp', granularities: ['departements', 'france']},
      {name: 'mbtiles', granularities: ['france']}
    ]
  },
  {
    date: '1er octobre 2021',
    path: '2021-10-01',
    baseUrl: downloadUrls.current,
    formats: [
      {name: 'geojson', granularities: ['communes', 'departements', 'france']},
      {name: 'shp', granularities: ['departements', 'france']},
      {name: 'mbtiles', granularities: ['france']}
    ]
  },
  {
    date: '1er juillet 2021',
    path: '2021-07-01',
    baseUrl: downloadUrls.current,
    formats: [
      {name: 'geojson', granularities: ['communes', 'departements', 'france']},
      {name: 'shp', granularities: ['departements', 'france']},
      {name: 'mbtiles', granularities: ['france']}
    ]
  },
  {
    date: '1er avril 2021',
    path: '2021-04-01',
    baseUrl: downloadUrls.current,
    formats: [
      {name: 'geojson', granularities: ['communes', 'departements', 'france']},
      {name: 'shp', granularities: ['departements', 'france']},
      {name: 'mbtiles', granularities: ['france']}
    ]
  },
  {
    date: '1er février 2021',
    path: '2021-02-01',
    baseUrl: downloadUrls.current,
    formats: [
      {name: 'geojson', granularities: ['communes', 'departements', 'france']},
      {name: 'shp', granularities: ['departements', 'france']},
      {name: 'mbtiles', granularities: ['france']}
    ]
  },
  {
    date: '1er octobre 2020',
    path: '2020-10-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'geojson', granularities: ['communes', 'departements', 'france']},
      {name: 'shp', granularities: ['departements', 'france']}
    ]
  },
  {
    date: '1er juillet 2020',
    path: '2020-07-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'geojson', granularities: ['communes', 'departements', 'france']},
      {name: 'shp', granularities: ['departements', 'france']}
    ]
  },
  {
    date: '1er janvier 2020',
    path: '2020-01-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'geojson', granularities: ['communes', 'departements', 'france']},
      {name: 'shp', granularities: ['departements', 'france']}
    ]
  },
  {
    date: '1er octobre 2019',
    path: '2019-10-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'geojson', granularities: ['communes', 'departements', 'france']},
      {name: 'shp', granularities: ['departements', 'france']}
    ]
  },
  {
    date: '1er juillet 2019',
    path: '2019-07-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'geojson', granularities: ['communes', 'departements', 'france']},
      {name: 'shp', granularities: ['departements', 'france']}
    ]
  },
  {
    date: '1er avril 2019',
    path: '2019-04-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'geojson', granularities: ['communes', 'departements', 'france']},
      {name: 'shp', granularities: ['departements', 'france']}
    ]
  },
  {
    date: '1er janvier 2019',
    path: '2019-01-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'geojson', granularities: ['communes', 'departements', 'france']},
      {name: 'shp', granularities: ['departements', 'france']}
    ]
  },
  {
    date: '1er octobre 2018',
    path: '2018-10-01',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'geojson', granularities: ['communes', 'departements', 'france']},
      {name: 'shp', granularities: ['departements', 'france']}
    ]
  },
  {
    date: '29 juin 2018',
    path: '2018-06-29',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'geojson', granularities: ['communes', 'departements', 'france']},
      {name: 'shp', granularities: ['departements', 'france']}
    ]
  },
  {
    date: '3 avril 2018',
    path: '2018-04-03',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'geojson', granularities: ['communes', 'departements', 'france']},
      {name: 'shp', granularities: ['departements', 'france']}
    ]
  },
  {
    date: '2 janvier 2018',
    path: '2018-01-02',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'geojson', granularities: ['communes', 'departements']}
    ]
  },
  {
    date: '12 octobre 2017',
    path: '2017-10-12',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'geojson', granularities: ['communes', 'departements']}
    ]
  },
  {
    date: '6 juillet 2017',
    path: '2017-07-06',
    baseUrl: downloadUrls.old,
    formats: [
      {name: 'geojson', granularities: ['communes', 'departements']}
    ]
  }
]
function getUrl(baseUrl, path, selectedFormat, granularity) {
  return `${baseUrl}/${path}/${selectedFormat}/${granularity}`
}

function CadastreEtalab() {
  return (
    <div>
      <Section>
        <div className='main'>
          <h4>Raison d’être de ce jeu de données</h4>
          <p>Le <Link href='/datasets/plan-cadastral-informatise'><a>Plan Cadastral Informatisé</a></Link> est diffusé sous deux formats experts rendant sa réutilisation difficile en dehors du contexte des applications métiers.<br />
            Etalab a donc pris l’initiative d’en redistribuer une version retravaillée, dans des formats plus largement répandus.<br /></p>

          <h4>Données sources</h4>
          <p>Ces données sont produites à partir :</p>
          <ul>
            <li>des <Link href='/datasets/plan-cadastral-informatise'><a>données EDIGÉO du PCI Vecteur</a></Link> ;</li>
            <li>des <a href='https://www.data.gouv.fr/datasets/5e6ad06d06e3e742367168cc/'>données cadastrales de l’Eurométropole de Strasbourg</a>.</li>
          </ul>

          <h4>Processus de construction</h4>

          <p>Les différentes couches sont constituées par juxtaposition des feuilles, sans correction de topologie.<br />
            Les données de l’Eurométropole Strasbourg sont ajoutées par écrasement de celles éventuellement présentes dans le PCI Vecteur.<br />
            Le modèle de données est simplifié, et ne sont conservés que les <b>sections</b>, les <b>feuilles</b>, les <b>lieux-dits</b>, les <b>parcelles</b>, les <b>subdivisions fiscales</b>, les <b>limites de communes</b> et le <b>bâti</b>.<br />
            La couche des contours des <b>préfixes de sections</b> est construite à partir de la couche des sections.<br />
            Le code source est ouvert et <a href='https://github.com/etalab/cadastre'>disponible sur GitHub</a>.
          </p>

          <h4>Couverture</h4>

          <p>Les 34 700 communes couvertes par le PCI Vecteur, ainsi que les communes de l’Eurométropole de Strasbourg.<br />
            Les collectivités d’outre-mer de Saint-Martin et de Saint-Barthelemy sont présentes et intégrées dans le département de la Guadeloupe (971).</p>

          <h4>Formats disponibles</h4>
          <p>Les données sont actuellement disponibles aux formats <a href='http://geojson.org/'>GeoJSON</a> compressé, <a href='http://geojson.org/'>GeoJSON</a> simple et <a href='https://fr.wikipedia.org/wiki/Shapefile'>Shapefile</a>, via l’outil d’aide au téléchargement.</p>

          <h4>Couches géographiques</h4>

          <ul>
            <li>parcelles (polygones ou multi polygones)</li>
            <li>subdivisions_fiscales (polygones)</li>
            <li>lieux_dits (polygones)</li>
            <li>feuilles (multi polygones)</li>
            <li>sections (multi polygones)</li>
            <li>prefixes_sections (multi polygones)</li>
            <li>communes (multi polygones)</li>
            <li>batiments (polygones)</li>
          </ul>

          <h4>Mise à disposition</h4>

          <p>Les données sont mises à disposition de deux manières :</p>
          <ul>
            <li>En <b>téléchargement direct</b> à la <b>commune</b>, au <b>département</b> ou <b>France entière</b>, pour le format <a href='http://geojson.org/'>GeoJSON</a> compressé, au <b>département</b> ou <b>France entière</b> pour le format <a href='https://fr.wikipedia.org/wiki/Shapefile'>Shapefile</a>. Ce sont ces URL qu’il faut utiliser si vous souhaitez <b>automatiser la récupération des données</b> et <b>bénéficier des meilleures performances</b>.</li>
            <li>Via un outil en ligne pour les données aux formats <a href='http://geojson.org/'>GeoJSON</a> et <a href='https://fr.wikipedia.org/wiki/Shapefile'>Shapefile</a>, quel que soit le niveau de granularité.</li>
          </ul>
          <p>Les deux modes de mise à disposition sont accessibles ci-dessous.</p>
          <p>Les archives de <b>juillet 2017</b> à <b>octobre 2019</b> sont maintenant hébergées sur <a href='https://files.data.gouv.fr/cadastre/'>https://files.data.gouv.fr/cadastre/</a></p>

          <h4>Historique</h4>

          <ul>{listItemsHistorique}</ul>;
        </div>
      </Section>
      <Section title='Millésimes disponibles en téléchargement direct' background='grey'>
        <p>Les liens suivants permettent de télécharger les données cadastrales <b>à la commune</b>, ou <b>au département</b>.<br />Dans le cas d’un téléchargement à la commune, vous serez invité à choisir un code département puis un code de commune.</p>
        <p>NB : Il est possible de remplacer la date du millésime par `latest` dans les URL.</p>
        <Millesimes millesimes={millesimes.slice(0, 2)} getUrl={getUrl} />
        <WrapperShowHide labelWhenClosed='Montrer les données des anciennes dates' labelWhenOpened='Cacher les données des anciennes dates'>
          <Millesimes millesimes={millesimes.slice(2)} getUrl={getUrl} />
        </WrapperShowHide>
      </Section>
      <Section title='Aide au téléchargement' subtitle='Télécharger facilement n’importe quel niveau de granularité'>
        <DownloadAssistant productList={products} />
      </Section>
      <style jsx>{`
      .ressources {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        grid-gap: 1em;
        grid-row-gap: 0.6em;
        margin: 2em 0;
      }
    `}</style>
    </div>
  )
}

export default CadastreEtalab
