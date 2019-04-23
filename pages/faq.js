import FaQuestion from 'react-icons/lib/fa/question'
import Page from '../layouts/main'

import Head from '../components/head'
import Section from '../components/section'

const title = 'Foire aux questions'
const description = 'Questions les plus fréquemment posées.'

export default () => (
  <Page title={title} description={description}>
    <Head title={title} icon={<FaQuestion />}>
      {description}
    </Head>
    <Section>
      <div className='row'>
        <div className='prose'>

          <h3>Qui gère ce site ?</h3>
          <p>Le site cadastre.data.gouv.fr est géré par la <a href='https://www.etalab.gouv.fr'>mission Etalab</a> de la direction interministérielle du numérique et du système d’information et de communication de l’État (DINSIC).</p>

          <h3>Que puis-je faire avec les données ?</h3>
          <p>Les données cadastrales diffusées sur ce site sont disponibles sous <a href='https://www.etalab.gouv.fr/wp-content/uploads/2017/04/ETALAB-Licence-Ouverte-v2.0.pdf'>Licence Ouverte 2.0</a>.<br />
            Elles peuvent être utilisées librement, y compris exploitées commercialement, tant que la source et la date de mise à jour sont citées.<br />
            N’hésitez pas à vous référer au texte de la <a href='https://www.etalab.gouv.fr/wp-content/uploads/2017/04/ETALAB-Licence-Ouverte-v2.0.pdf'>Licence Ouverte 2.0</a> pour plus de précision.</p>

          <h3>Pourquoi les données du plan cadastral se chevauchent-elles dans certaines zones ?</h3>
          <p>Les feuilles cadastrales sont numérisées feuille par feuille. Les différents procédés et époques de numérisation ont pour conséquence des chevauchements, en particulier en limites de communes et en zones forestières, de montagne ou agricoles.</p>

          <h3>Quelle différence entre les données cadastrales retravaillées par Etalab et la BD Parcellaire ?</h3>
          <p>La <a href='http://professionnels.ign.fr/bdparcellaire'>BD Parcellaire</a> diffusée par l’<a href='http://www.ign.fr/'>IGN</a> va plus loin que ce que propose Etalab dans le sens où il y a un important travail de correction topologique.<br />
            Si ces données sont gratuites pour la plupart des missions de service public, elles ne le sont pas pour les acteurs privés et ne sont pas à proprement parler des données ouvertes.</p>

          <h3>Quand les plans cadastraux des communes qui ne le sont pas encore seront-ils vectorisés ?</h3>
          <p>Il n’existe pas de planning. Certaines communes n’ont pas manifesté d’intérêt pour cette initiative.<br />
            Dans la plupart des cas il s’agit de problèmes de financement.</p>

          <h3>Comment obtenir des tirages papiers du plan cadastral ?</h3>
          <p>Cette prestation est proposée sur le site de la DGFiP <a href='https://cadastre.gouv.fr'><span>cadastre.gouv.fr</span></a>.</p>

          <h3>Je constate une erreur dans le plan cadastral, comment la faire corriger ?</h3>
          <p>Ce type de correction doit être demandé au Centre des impôts fonciers de votre département, dont vous trouverez les coordonnées sur <a href='https://www.service-public.fr/particuliers/recherche?keyword=centre%20des%20impots%20fonciers&rubricFilter=annuaire'>service-public.fr</a>.</p>
        </div>
      </div>
    </Section>
  </Page>
)
