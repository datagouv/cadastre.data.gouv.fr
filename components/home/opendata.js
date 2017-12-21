import Section from '../section'

const title = 'Quelles sont les données ouvertes ?'

const subtitle = `Les données ouvertes à ce jour sont celles du plan cadastral : parcelles, sections,
bâti et éléments d’habillage. Les fichiers des propriétés et des propriétaires ne sont pas concernés.`

export default () => (
  <Section title={title} subtitle={subtitle} />
)
