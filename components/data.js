import Link from 'next/link'
import FlaskIcon from 'react-icons/lib/fa/flask'
import FaFileImageO from 'react-icons/lib/fa/file-image-o'
import MapIcon from 'react-icons/lib/fa/map-o'
import DownloadIcon from 'react-icons/lib/fa/download'
import ThIcon from 'react-icons/lib/fa/th'

import theme from '../styles/theme'

import Section from './section'

const iconStyle = {
  marginRight: '2em'
}

const Data = () => (
  <Section>
    <div className='data'>
      <ThIcon size={50} style={iconStyle} />
      <div>
        <h2><Link href='/data/pci-vecteur'><a>PCI Vecteur</a></Link></h2>
        <p>Le plan cadastral est le découpage du territoire français en unités de surfaces permettant le calcul de certains impôts (notamment la taxe foncière, la taxe d’habitation et la cotisation foncière des entreprises).</p>
      </div>
    </div>

    <div className='data'>
      <FaFileImageO size={50} style={iconStyle} />
      <div>
        <h2><Link href='/data/pci-image'><a>PCI Image</a></Link></h2>
        <p>[insert description here]</p>
      </div>
    </div>

    <div className='data'>
      <FlaskIcon size={50} style={iconStyle} />
      <div>
        <Link href='/data/cadastre-etalab'><a><h2>Cadastre by Etalab</h2></a></Link>
        <p>Le plan cadastral est le découpage du territoire français en unités de surfaces permettant le calcul de certains impôts.</p>
      </div>
    </div>

    <div className='data'>
      <MapIcon size={50} style={iconStyle} />
      <div>
        <Link href='/data/cadastre-strasbourg'><a><h2>Données cadastrales Eurométropole de Strasbourg</h2></a></Link>
        <p>[insert description here]</p>
      </div>
    </div>

    <div className='data'>
      <DownloadIcon size={50} style={iconStyle} />
      <div>
        <Link href='/data/download-assistant'><a><h2>Assistant de téléchargement</h2></a></Link>
        <p>[insert description here]</p>
      </div>
    </div>
    <style jsx>{`
      a {
        color: ${theme.darkText};
        text-decoration: underline;
      }

      .data {
        display: flex;
        align-items: center;
      }

      `}</style>
  </Section>
)

export default Data
