import React from 'react'

import {HelpCircle} from 'react-feather'
import Page from '../layouts/main'

import Head from '../components/head'
import Section from '../components/section'

import Question from '../components/faq/question'

const title = 'Foire aux questions'
const description = 'Questions les plus fréquemment posées.'

function Faq() {
  return (
    <Page title={title} description={description}>
      <Head title={title} icon={<span className='feather-icon'><HelpCircle /></span>}>
        {description}
      </Head>
      <Section>
        <div className='faq-row'>
          <div className='theme'>
            <Question question='Qui gère ce site ?'>
              <p>Le site cadastre.data.gouv.fr est géré par l&apos;équipe de <a href='https://data.gouv.fr/'>data.gouv.fr</a> de la direction interministérielle du numérique (DINUM).</p>
            </Question>

            <Question question='Que puis-je faire avec les données ?'>
              <p>Les données cadastrales diffusées sur ce site sont disponibles sous <a href='https://www.etalab.gouv.fr/wp-content/uploads/2017/04/ETALAB-Licence-Ouverte-v2.0.pdf'>Licence Ouverte 2.0</a>.<br />
                Elles peuvent être utilisées librement, y compris exploitées commercialement, tant que la source et la date de mise à jour sont citées.<br />
                N’hésitez pas à vous référer au texte de la <a href='https://www.etalab.gouv.fr/wp-content/uploads/2017/04/ETALAB-Licence-Ouverte-v2.0.pdf'>Licence Ouverte 2.0</a> pour plus de précision.
              </p>
            </Question>

            <Question question='Comment utiliser ces données ?'>
              <p>Un <a href='https://guides.data.gouv.fr/reutiliser-des-donnees/autour-du-cadastre'>guide</a> est à votre disposition pour vous accompagner dans l'utilisation des données ouvertes du cadastre.
              </p>
            </Question>

            <Question question='Pourquoi les données du plan cadastral se chevauchent-elles dans certaines zones ?'>
              <p>
                Les feuilles cadastrales sont numérisées feuille par feuille. Les différents procédés et époques de numérisation ont pour conséquence des chevauchements, en particulier en limites de communes et en zones forestières, de montagne ou agricoles.
              </p>
            </Question>

            <Question question='Quelle différence entre les données cadastrales retravaillées par Etalab et la BD Parcellaire ?'>
              <p>
                La <a href='http://professionnels.ign.fr/bdparcellaire'>BD Parcellaire</a> diffusée par l’<a href='http://www.ign.fr/'>IGN</a> va plus loin que ce que propose Etalab dans le sens où il y a un important travail de correction topologique.<br />
                Si ces données sont gratuites pour la plupart des missions de service public, elles ne le sont pas pour les acteurs privés et ne sont pas à proprement parler des données ouvertes.
              </p>
            </Question>

            <Question question='Quand les plans cadastraux des communes qui ne le sont pas encore seront-ils vectorisés ?'>
              <p>
                Il n’existe pas de planning. Certaines communes n’ont pas manifesté d’intérêt pour cette initiative.<br />
                Dans la plupart des cas il s’agit de problèmes de financement.
              </p>
            </Question>

            <Question question='Comment obtenir des tirages papiers du plan cadastral ?'>
              <p>Cette prestation est proposée sur le site de la DGFiP <a href='https://cadastre.gouv.fr'><span>cadastre.gouv.fr</span></a>.</p>
            </Question>

            <Question question='Je constate une erreur dans le plan cadastral, comment la faire corriger ?'>
              <p>
                Ce type de correction doit être demandé au Centre des impôts fonciers de votre département, dont vous trouverez les coordonnées sur <a href='https://www.service-public.fr/particuliers/recherche?keyword=centre%20des%20impots%20fonciers&rubricFilter=annuaire'>service-public.fr</a>.
              </p>
            </Question>
          </div>
        </div>
      </Section>

      <style jsx>{`
    .theme {
      margin: 1em 0;
    }

    .faq-row {
      display: flex;
      flex-direction: column;
    }
  `}</style>
    </Page>
  )
}

export default Faq
