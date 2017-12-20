import FlaskIcon from 'react-icons/lib/fa/flask'
import MapIcon from 'react-icons/lib/fa/map-o'
import DownloadIcon from 'react-icons/lib/fa/download'
import ThIcon from 'react-icons/lib/fa/th'

import Section from './section'
import HeadLinkTitle from './head-link-title'

const titles = [
  {
    title: 'Plan Cadastral Informatisé (PCI)',
    href: '/datasets/pci',
    subtitle: 'Le plan cadastral est le découpage du territoire français en unités de surfaces permettant le calcul de certains impôts (notamment la taxe foncière, la taxe d’habitation et la cotisation foncière des entreprises).',
    icon: <ThIcon />
  },
  {
    title: 'Cadastre par Etalab',
    href: '/datasets/cadastre-etalab',
    subtitle: 'Le plan cadastral est le découpage du territoire français en unités de surfaces permettant le calcul de certains impôts.',
    icon: <FlaskIcon />
  },
  {
    title: 'Données cadastrales Eurométropole de Strasbourg',
    href: '/datasets/cadastre-strasbourg',
    subtitle: '[insert description here]',
    icon: <MapIcon />
  },
  {
    title: 'Assistant de téléchargement',
    href: '/datasets/download-assistant',
    subtitle: '[insert description here]',
    icon: <DownloadIcon />
  }
]

const Datasets = () => (
  <Section>
    {titles.map(({title, href, subtitle, icon}) =>
      (<HeadLinkTitle
        key={title}
        title={title}
        href={href}
        subtitle={subtitle}
        icon={icon} />)
    )}
  </Section>
)

export default Datasets
