import React from 'react'
import {Map, Archive, Maximize} from 'react-feather'
import Section from './section.js'
import HeadLinkTitle from './head-link-title.js'

const titles = [
  {
    title: 'Plan Cadastral Informatisé (PCI)',
    href: '/datasets/plan-cadastral-informatise',
    description: <span>Données de référence pour la France entière (hors Strasbourg), produites par la Direction Générale des Finances Publiques.<br />Environ 600 000 feuilles disponibles aux formats EDIGÉO et DXF.</span>,
    icon: <span className='feather-icon'><Map /></span>,
  },
  {
    title: 'Cadastre Eurométropole de Strasbourg',
    href: 'https://www.data.gouv.fr/datasets/5e6ad06d06e3e742367168cc',
    description: <span>Données de référence pour l’Eurométropole de Strasbourg.<br />3 couches disponibles au format Shapefile.</span>,
    icon: <span className='feather-icon'><Archive /></span>,
  },
  {
    title: 'Cadastre Etalab',
    href: '/datasets/cadastre-etalab',
    description: <span>Données consolidées pour la France entière, produites par Etalab à partir des données de référence ci-dessus.<br />8 couches disponibles aux formats GeoJSON et Shapefile.</span>,
    icon: <span className='feather-icon'><Maximize /></span>,
  },
]

const Datasets = () => (
  <Section>
    {titles.map(({title, href, description, icon}) => (
      <HeadLinkTitle
        key={title}
        title={title}
        href={href}
        subtitle={description}
        icon={icon} />
    ),
    )}
  </Section>
)

export default Datasets
