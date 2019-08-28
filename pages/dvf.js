import React from 'react'

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
        <ButtonLink className='button-outline large primary' href='https://www.data.gouv.fr/fr/datasets/5c4ae55a634f4117716d5656/'>
          Télécharger les données sur data.gouv.fr
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
        <ButtonLink className='button-outline large' href='https://www.data.gouv.fr/fr/datasets/r/99549bdd-91f1-4a99-ac00-855b9a14e5f6'>
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
          <Dataset year='2018' size='297 Mo' link='https://www.data.gouv.fr/fr/datasets/r/1be77ca5-dc1b-4e50-af2b-0240147e0346' />
          <Dataset year='2017' size='428 Mo' link='https://www.data.gouv.fr/fr/datasets/r/7161c9f2-3d91-4caf-afa2-cfe535807f04' />
          <Dataset year='2016' size='373 Mo' link='https://www.data.gouv.fr/fr/datasets/r/0ab442c5-57d1-4139-92c2-19672336401c' />
          <Dataset year='2015' size='348 Mo' link='https://www.data.gouv.fr/fr/datasets/r/09f013c5-9531-444b-ab6c-7a0e88efd77d' />
          <Dataset year='2014' size='318 Mo' link='https://www.data.gouv.fr/fr/datasets/r/dc13282f-3c7a-4fac-b1f3-3939e39d45f6' />
        </div>
      </div>

      <div className='ressources-container'>
        <h2>Documentation</h2>

        <div className='grid ressources'>
          <Documentation title='Notice' format='PDF' link='https://www.data.gouv.fr/fr/datasets/r/d573456c-76eb-4276-b91c-e6b9c89d6656'>
            Notice descriptive du fichier demandes de valeurs foncières.
          </Documentation>

          <Documentation title='Référence' format='PDF' link='https://www.data.gouv.fr/fr/datasets/r/e702307c-fc72-474b-8e71-b496e2ed1070'>
            Tables de référence nature de culture.
          </Documentation>

          <Documentation title='Informations' format='PDF' link='https://www.data.gouv.fr/fr/datasets/r/2cacd01a-3492-47aa-8750-1b58535ad20b'>
            Information des personnes concernées par le traitement informatique.
          </Documentation>
        </div>
      </div>
    </Section>

    <Section title='Données enrichies'>
      <div className='column'>
        <p>
          En plus des données brutes officielles produites par la DGFiP, Etalab met à disposition des données enrichies, à la commune et au département.
        </p>
        <ButtonLink className='button-outline large primary' href='https://www.data.gouv.fr/fr/datasets/5cc1b94a634f4165e96436c1/'>
          Accéder aux données
        </ButtonLink>
      </div>
    </Section>

    <Section background='color'>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <ButtonLink className='button-outline large' href='https://app.dvf.etalab.gouv.fr'>
            Explorer les données
        </ButtonLink>
      </div>
    </Section>

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
