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
          Télécharger les données
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
        <ButtonLink className='button-outline large' href='#download'>
        Voir les conditions générales d’utilisation
        </ButtonLink>
      </div>
    </Section>

    <Section title='Télécharger les fichiers' background='grey' id='download'>
      <div className='article__content'>
        <div className='article__container'>
          <h2>Données disponibles</h2>

          <div className='article__author-list'>
            <Dataset year='2018' size='297 Mo' link='' />
            <Dataset year='2017' size='428 Mo' link='' />
          </div>

          <div className='article__author-list'>
            <Dataset year='2016' size='373 Mo' link='' />
            <Dataset year='2015' size='348 Mo' link='' />
          </div>

          <div className='article__author-list'>
            <Dataset year='2014' size='373 Mo' link='' />
          </div>
        </div>
      </div>

      <div className='article__content'>
        <div className='article__container'>
          <h2>Documentation</h2>

          <div className='article__author-list'>
            <Documentation title='Notice' format='PDF' link=''>
              Notice descriptive du fichier demande de valeurs foncières.
            </Documentation>

            <Documentation title='Référence' format='PDF' link=''>
              Tables de référence nature de culture.
            </Documentation>
          </div>

          <div className='article__author-list'>
            <Documentation title='Informations' format='PDF' link=''>
              Information des personnes concernées par le traitement informatique.
            </Documentation>
          </div>
        </div>
      </div>
    </Section>

    <div className='hero hero-explore' role='banner'>
      <div className='hero__container'>
        <ButtonLink className='button-outline large' href=''>
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
  `}</style>
  </Page>
)
