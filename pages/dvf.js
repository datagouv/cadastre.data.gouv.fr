import FaOBuilding from 'react-icons/lib/fa/building-o'
import Page from '../layouts/main'

import Head from '../components/head'
import Section from '../components/section'
import ButtonLink from '../components/button-link'

import Dataset from '../components/dvf/dataset'
import Documentation from '../components/dvf/documentation'

const title = 'Base « Demande de valeurs foncières »'
const description = 'Consultez les ventes foncières réalisées au cours des cinq dernières années'

export default () => (
  <Page title={title} description={description}>
    <Head title={title} icon={<FaOBuilding />}>
      {description}
    </Head>
    <Section title='Améliorer l’accès aux données sur les ventes de biens fonciers' background='white'>
      <div className='column'>
        <p>
          La base de données « Demandes de valeurs foncières », ou DVF, recense l’ensemble des ventes de biens fonciers réalisées au cours des cinq dernières années, en métropole et dans les départements et territoires d’outre-mer&nbsp;— sauf à Mayotte et en Alsace-Moselle. Les biens concernés peuvent être bâtis (appartement et maison) ou non bâtis (parcelles et exploitations). Les données sont produites par Bercy, c’est-à-dire par la direction générale des finances publiques. Elles proviennent des actes enregistrés chez les notaires et des informations contenues dans le cadastre.
        </p>
        <ButtonLink className='button-outline large primary' href='#download'>
          Télécharger les données DVF
        </ButtonLink>
      </div>
    </Section>

    <Section title='Utiliser les données DVF dans votre projet' background='grey'>
      <div className='row'>
        <p><strong>Collectivités</strong>.&nbsp;— Obtenez une meilleure connaissance du foncier bâti sur votre territoire.</p>
        <p><strong>Établissements publics fonciers</strong>.&nbsp;— Effectuez des analyses spatiales à partir des données sur le foncier.</p>
        <p><strong>Opérateurs économiques</strong>.&nbsp;— Analysez de manière fine les marchés du logement à travers des services innovants.</p>
      </div>
    </Section>

    <Section title='Cadre juridique' background='dark'>
      <div className='column'>
        <p>
          La base de données DVF ne contient pas de données à caractère personnel, comme le nom du vendeur ou celui de l’acheteur d’un bien. Elle ne contient que des informations sur les transactions : type de bien vendu, superficie, prix de vente et ainsi de suite. Comme ces données peuvent être recoupées avec d’autres données déjà en ligne, la direction générale des finances publiques rappelle que l’utilisation des données issues de la base DVF ne peut avoir ni pour objet ni pour effet de permettre la réidentification des personnes concernées, et qu’elle ne doit pas non plus faire l’objet d’une indexation sur les moteurs de recherche en ligne.
        </p>
        <ButtonLink className='button-outline large' href='https://cadastre.data.gouv.fr/data/hackathon-dgfip-dvf/conditions-generales-dutilisation.pdf'>
        Voir les conditions générales d’utilisation
        </ButtonLink>
      </div>
    </Section>

    {/* Hash for next/link */}
    <a id='download' />

    <Section title='Télécharger les fichiers' background='grey'>
      <div className='ressources-container'>
        <h2>Données disponibles</h2>

        <div className='grid ressources'>
          <Dataset year='2018' size='44 Mo (compressés)' link='https://cadastre.data.gouv.fr/data/hackathon-dgfip-dvf/valeursfoncieres-2018.txt.gz' />
          <Dataset year='2017' size='63 Mo (compressés)' link='https://cadastre.data.gouv.fr/data/hackathon-dgfip-dvf/valeursfoncieres-2017.txt.gz' />
          <Dataset year='2016' size='55 Mo (compressés)' link='https://cadastre.data.gouv.fr/data/hackathon-dgfip-dvf/valeursfoncieres-2016.txt.gz' />
          <Dataset year='2015' size='52 Mo (compressés)' link='https://cadastre.data.gouv.fr/data/hackathon-dgfip-dvf/valeursfoncieres-2015.txt.gz' />
          <Dataset year='2014' size='48 Mo (compressés)' link='https://cadastre.data.gouv.fr/data/hackathon-dgfip-dvf/valeursfoncieres-2014.txt.gz' />
        </div>
      </div>

      <div className='ressources-container'>
        <h2>Documentation</h2>

        <div className='grid ressources'>
          <Documentation title='Notice' format='PDF' link='https://cadastre.data.gouv.fr/data/hackathon-dgfip-dvf/notice-descriptive-du-fichier-dvf.pdf'>
            Notice descriptive du fichier demandes de valeurs foncières.
          </Documentation>

          <Documentation title='Référence' format='PDF' link='https://cadastre.data.gouv.fr/data/hackathon-dgfip-dvf/tables-de-reference-nature-de-culture.pdf'>
            Tables de référence nature de culture.
          </Documentation>

          <Documentation title='Informations' format='PDF' link='https://cadastre.data.gouv.fr/data/hackathon-dgfip-dvf/information-des-personnes-concernees-par-le-traitement-informatique.pdf'>
            Information des personnes concernées par le traitement informatique.
          </Documentation>
        </div>
      </div>
    </Section>

    <Section title='Données enrichies'>
      <div className='column'>
        <p>
          En plus des données brutes officielles produites par la DGFiP, Etalab met à disposition des <a href='https://github.com/etalab/dvf/blob/master/README-CSV.md'>données enrichies</a>, à la commune et au département.
        </p>
        <ButtonLink className='button-outline large primary' href='https://cadastre.data.gouv.fr/data/hackathon-dgfip-dvf/contrib/etalab-csv/'>
          Accéder aux données
        </ButtonLink>
      </div>
    </Section>

    <div className='hero hero-explore' role='banner'>
      <div className='hero__container'>
        <ButtonLink className='button-outline large' href='https://app.dvf.etalab.gouv.fr'>
          Explorer les données
        </ButtonLink>
      </div>
    </div>

    <style jsx>{`
      .column {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .ressources-container {
        margin: 2em 0;
      }

      .grid.ressources {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      }
  `}</style>
  </Page>
)
