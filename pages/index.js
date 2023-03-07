import React from 'react'

import {Map, Download} from 'react-feather'

import Page from '../layouts/main'
import Hero from '../components/hero'

import Usages from '../components/home/usages'
import Infolettre from '../components/infolettre'
import OtherSites from '../components/home/other-sites'
import Section from '../components/section'
import ButtonLink from '../components/button-link'

const title = 'Données cadastrales ouvertes'
const tagline = 'Consulter, télécharger et intégrer facilement les données cadastrales'

function Index() {
  return (
    <Page title={title} description={tagline}>

      <Hero title={title} tagline={tagline}>
        <div className='button-container'>
          <div className='action-button'>
            <ButtonLink style={{
              display: 'inline-flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              textAlign: 'center'
            }} href='/map' size='large'
            >
              Consulter la carte du cadastre <span style={{margin: '0 0.5em'}}><Map /></span>
            </ButtonLink>
          </div>
          <div className='action-button'>
            <ButtonLink style={{
              display: 'inline-flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              textAlign: 'center'
            }} href='/datasets' size='large'
            >
              Télécharger les données <span style={{margin: '0 0.5em'}}><Download /></span>
            </ButtonLink>
          </div>
        </div>
      </Hero>

      <Section>
        <div className='row'>
          <div>
            <h2 className='section__title'>Qu’est-ce que le cadastre ?</h2>
            <p className='section__subtitle'>
              Le cadastre est un ensemble de plans et fichiers administratifs qui recensent toutes les propriétés immobilières situées dans chaque commune française, et qui en consigne la valeur afin de servir de base de calcul à certains impôts. (Wikipedia)
            </p>
          </div>
          <div>
            <h2 className='section__title'>Quelles sont les données ouvertes ?</h2>
            <p className='section__subtitle'>
              Les données ouvertes à ce jour sont celles du plan cadastral : parcelles, sections, bâti et éléments d’habillage. Les fichiers des propriétés et des propriétaires ne sont pas concernés.
            </p>
          </div>
        </div>
      </Section>

      <Usages />
      <Infolettre />
      <OtherSites />
      <style jsx>{`
  .action-button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2em 2em 0 2em;
  }

  .button-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (max-width: 800px) {
      .button-container {
        flex-direction: column;
      }
  `}</style>
    </Page>
  )
}

export default Index
