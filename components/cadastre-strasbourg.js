import React from 'react'
import Link from 'next/link'
import Section from './section'
import Ressource from './ressource'

const CadastreStrasbourg = () => (
  <div>
    <Section>
      <div className='main'>
        <p>Ce jeu de données contient principalement les parcelles cadastrales gérées par le service Géomatique et Connaissance du Territoire de l’Eurométropole de Strasbourg sur le territoire de la collectivité.<br />Les parcelles sont issues d’opérations de calcul basée sur les croquis cadastraux ce qui permet d’atteindre une bonne précision géométrique des données.</p>

        <p>Le jeu de données contient également les sections cadastrales et les emprises de communes basées sur les limites cadastrales.</p>

        <p><b>Remarques :</b> Les données sont constituées de multi polygones, les arcs de cercles ont subis une discrétisation.</p>

        <p>Les attributs fournis sont les suivants :</p>

        <ul>
          <li>NUM_DEPT (numéro de département)</li>
          <li>NUM_COMMUN (numéro de commune INSEE sur 3 caractères)</li>
          <li>NUM_PARCEL (numéro de parcelle)</li>
          <li>CODE_PRECI (code de précision géométrique, voir <a href='https://www.data.gouv.fr/s/resources/parcelles-cadastrales-de-leurometropole-de-strasbourg/20171127-173844/BD_parcellaire.pdf'>détail en annexe</a>)</li>
          <li>DATE_MAJ (date de dernière mise à jour)</li>
        </ul>

        <p>
          Les données sont en cours de constitution pour les communes d’Achenheim, Breuschwickersheim, Hangenbieten, Kolbsheim et Osthoffen.
          Les contours de ces communes sont basés sur les données du <Link href='datasets/plan-cadastral-informatise'><a>Plan Cadastral Informatisé</a></Link>.
        </p>

        <p>Les données sont fournies dans le système RGF 93 CC48.</p>

        <p><strong>Les détails de constitution, de gestion et de qualité de la donnée sont présentés dans <a href='https://www.data.gouv.fr/s/resources/parcelles-cadastrales-de-leurometropole-de-strasbourg/20171127-173844/BD_parcellaire.pdf'>un document en annexe</a>.</strong></p>
      </div>
    </Section>
    <Section title='Ressources' background='grey'>
      <div className='ressources'>
        <Ressource
          title='Limites des parcelles cadastrales'
          lastModification='Dernière modification le 16 août 2018'
          format='SHP'
          link='https://static.data.gouv.fr/resources/donnees-cadastrales-de-leurometropole-de-strasbourg/20180816-163843/cadastre_parcelle.zip' />

        <Ressource
          title='Limites des sections cadastrales'
          lastModification='Dernière modification le 16 août 2018'
          format='SHP'
          link='https://static.data.gouv.fr/resources/donnees-cadastrales-de-leurometropole-de-strasbourg/20180816-163900/cadastre_section.zip' />

        <Ressource
          title='Limites des communes'
          lastModification='Dernière modification le mardi 20 décembre 2017'
          format='SHP'
          link='https://www.data.gouv.fr/s/resources/donnees-cadastrales-de-leurometropole-de-strasbourg/20171220-154146/171220_cadastre_communes.zip' />
      </div>
    </Section>
    <style jsx>{`
      .ressources {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        grid-gap: 1em;
        grid-row-gap: 0.6em;
        margin: 2em 0;
      }
    `}</style>
  </div>
)

export default CadastreStrasbourg
