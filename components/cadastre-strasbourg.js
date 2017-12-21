import Section from './section'
import Ressource from './ressource'

const CadastreStrasbourg = () => (
  <div>
    <Section>
      <div className='main'>
        <p>Créée le 4 décembre 1967 sous le nom de communauté urbaine de Strasbourg (CUS), elle devient une métropole le 1er janvier 2015.</p>

        <p>Ce jeu de données contient principalement les parcelles cadastrales gérées par le service Géomatique et Connaissance du Territoire de l’Eurométropole de Strasbourg sur le territoire de la collectivité.
        Les parcelles sont issues d’opérations de calcul basée sur les croquis cadastraux ce qui permet d’atteindre une bonne précision géométrique des données.</p>

        <p>Le jeu de données contient également les sections cadastrales et les emprises de communes basées sur les limites cadastrales.</p>
        <h4>Remarques :</h4>

        <p>Les données sont constituées de multi polygones, les arcs de cercles ont subis une discrétisation.</p>

        <p>Les attributs fournis sont les suivants :</p>

        <ul>
          <li>NUM_DEPT (numéro de département)s</li>
          <li>NUM_COMMUN (numéro de commune INSEE sur 3 caractères)</li>
          <li>NUM_PARCEL (numéro de parcelle)</li>
          <li>CODE_PRECI (code de précision géométrique, voir détail en annexe)</li>
          <li>DATE_MAJ (date de dernière mise à jour)</li>
        </ul>

        <p>
          Les données sont en cours de constitution pour les communes d’Achenheim, Breuschwickersheim, Hangenbieten, Kolbsheim et Osthoffen.
          Les contours de ces communes sont basés sur les données du Plan Cadastral Informatisé.
        </p>

        <p>Les données sont fournies dans le système RGF 93 CC48.</p>

        <p><strong>Les détails de constitution, de gestion et de qualité de la donnée sont présentés dans un document en annexe.</strong></p>
      </div>
    </Section>
    <Section title='Ressources' background='grey'>
      <div className='ressources'>
        <Ressource
          title='171122_cadastre_parcelles.zip'
          lastModification='Dernière modification le mardi 28 novembre 2017'
          format='zip'
          link='https://www.data.gouv.fr/s/resources/parcelles-cadastrales-de-leurometropole-de-strasbourg/20171127-173805/171122_cadastre.zip' />

        <Ressource
          title='171128_cadastre_sections.zip'
          lastModification='Dernière modification le mardi 28 novembre 2017'
          format='zip'
          link='https://www.data.gouv.fr/s/resources/donnees-cadastrales-de-leurometropole-de-strasbourg/20171128-105729/171122_cadastre_sections.zip' />

        <Ressource
          title='171128_cadastre_communes.zip'
          lastModification='Dernière modification le mardi 28 novembre 2017'
          format='zip'
          link='https://www.data.gouv.fr/s/resources/donnees-cadastrales-de-leurometropole-de-strasbourg/20171128-105835/171128_cadastre_communes.zip' />

        <Ressource
          title='Descriptif du parcellaire'
          lastModification='Dernière modification le lundi 27 novembre 2017'
          format='pdf'
          link='https://www.data.gouv.fr/s/resources/parcelles-cadastrales-de-leurometropole-de-strasbourg/20171127-173844/BD_parcellaire.pdf' />
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
