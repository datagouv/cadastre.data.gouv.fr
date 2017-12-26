import FlaskIcon from 'react-icons/lib/fa/flask'
import FileArchiveO from 'react-icons/lib/fa/file-archive-o'
import MapO from 'react-icons/lib/fa/map-o'

import Section from './section'
import HeadLinkTitle from './head-link-title'

const titles = [
  {
    title: 'Plan Cadastral Informatisé (PCI)',
    href: '/datasets/plan-cadastral-informatise',
    description: <span>Données de référence pour la France entière (hors Strasbourg), produites par la Direction Générale des Finances Publiques.<br />Environ 600 000 feuilles disponibles aux formats EDIGÉO et DXF.</span>,
    icon: <MapO />
  },
  {
    title: 'Cadastre Eurométropole de Strasbourg',
    href: '/datasets/cadastre-strasbourg',
    description: <span>Données de référence pour l’Eurométropole de Strasbourg.<br />4 couches disponibles au format Shapefile.</span>,
    icon: <FileArchiveO />
  },
  {
    title: 'Cadastre Etalab',
    href: '/datasets/cadastre-etalab',
    description: <span>Données consolidées pour la France entière, produites par Etalab à partir des données de référence ci-dessus.<br />5 couches disponibles au format GeoJSON.</span>,
    icon: <FlaskIcon />
  }
]

const Datasets = () => (
  <Section>
    {titles.map(({title, href, description, icon}) =>
      (<HeadLinkTitle
        key={title}
        title={title}
        href={href}
        subtitle={description}
        icon={icon} />)
    )}
  </Section>
)

export default Datasets
