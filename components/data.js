import FlaskIcon from 'react-icons/lib/fa/flask'
import FaFileImageO from 'react-icons/lib/fa/file-image-o'
import MapIcon from 'react-icons/lib/fa/map-o'
import DownloadIcon from 'react-icons/lib/fa/download'
import ThIcon from 'react-icons/lib/fa/th'

import Section from './section'
import HeadLinkTitle from './head-link-title'

const titles = [
  {
    title: 'PCI Vecteur',
    href: '/data/pci-vecteur',
    subtitle: 'Le plan cadastral est le découpage du territoire français en unités de surfaces permettant le calcul de certains impôts (notamment la taxe foncière, la taxe d’habitation et la cotisation foncière des entreprises).',
    icon: <ThIcon />
  },
  {
    title: 'PCI Image',
    href: '/data/pci-image',
    subtitle: '[insert description here]',
    icon: <FaFileImageO />
  },
  {
    title: 'Cadastre par Etalab',
    href: '/data/cadastre-etalab',
    subtitle: 'Le plan cadastral est le découpage du territoire français en unités de surfaces permettant le calcul de certains impôts.',
    icon: <FlaskIcon />
  },
  {
    title: 'Données cadastrales Eurométropole de Strasbourg',
    href: '/data/cadastre-strasbourg',
    subtitle: '[insert description here]',
    icon: <MapIcon />
  },
  {
    title: 'Assistant de téléchargement',
    href: '/data/download-assistant',
    subtitle: '[insert description here]',
    icon: <DownloadIcon />
  }
]

const Data = () => (
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

export default Data
