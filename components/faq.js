import Section from './section'

const Faq = () => (
  <Section>
    <div className='row'>
      <div className='prose'>
        <h2>À propos du site</h2>
        <h3>À quoi sert ce site ?</h3>
        <p>Ce site est destiné à :</p>
        <ul>
          <li>faciliter l’accès aux données cadastrales,</li>
          <li>faciliter leur réutilisation,</li>
          <li>fournir un assistant de téléchargement pour trouver les données en plusieurs formats,</li>
        </ul>
        <h3>Qui gère ce site ?</h3>
        <p>Le site cadastre.data.gouv.fr est géré par la mission Etalab de la DINSIC.</p>

        <h2>Les données</h2>

        <h3>Quelle est la différence entre le Plan Cadastral Informatisé et les données cadastrales diffusées par Etalab ?</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat diam lorem, eu congue nisi molestie sed. Duis luctus lacus diam, vulputate dictum sem posuere sed.</p>

        <h3>Pourquoi la métropole de Strasbourg est-elle un cas particulier ?</h3>
        <p>Cras auctor vitae magna id interdum. Suspendisse potenti. Aliquam tempus sed massa sit amet interdum. Pellentesque vestibulum nibh ut sodales bibendum. Nullam suscipit bibendum finibus.</p>

        <h3>Est-il possible de télécharger les données du Plan Cadastral Informatisé en projections locales ?</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat diam lorem, eu congue nisi molestie sed. Duis luctus lacus diam, vulputate dictum sem posuere sed.</p>

        <h3>Depuis quand les données du plan cadastral sont-elles diffusées gratuitement ?</h3>
        <p>Cras auctor vitae magna id interdum. Suspendisse potenti. Aliquam tempus sed massa sit amet interdum. Pellentesque vestibulum nibh ut sodales bibendum. Nullam suscipit bibendum finibus.</p>

        <h3>Quelles sont les données juridiquement opposables ?</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat diam lorem, eu congue nisi molestie sed. Duis luctus lacus diam, vulputate dictum sem posuere sed.</p>

        <h3>Pourquoi les données du plan cadastral se chevauchent-elles dans certaines zones ?</h3>
        <p>Cras auctor vitae magna id interdum. Suspendisse potenti. Aliquam tempus sed massa sit amet interdum. Pellentesque vestibulum nibh ut sodales bibendum. Nullam suscipit bibendum finibus.</p>

        <h3>Existe-t-il des flux OGC diffusant les données cadastrales (WFS, WMS) ?</h3>
        <p>Cras auctor vitae magna id interdum. Suspendisse potenti. Aliquam tempus sed massa sit amet interdum. Pellentesque vestibulum nibh ut sodales bibendum. Nullam suscipit bibendum finibus.</p>

        <h3>Quelle différence entre les données cadastrales diffusées par Etalab et la BD Parcellaire ?</h3>
        <p>Cras auctor vitae magna id interdum. Suspendisse potenti. Aliquam tempus sed massa sit amet interdum. Pellentesque vestibulum nibh ut sodales bibendum. Nullam suscipit bibendum finibus.</p>

        <h3>Quand les plans cadastraux des communes qui ne le sont pas encore seront-ils vectorisés ?</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat diam lorem, eu congue nisi molestie sed. Duis luctus lacus diam, vulputate dictum sem posuere sed.</p>

        <h2>Vous souhaitez consulter le plan cadastral et acheter des tirages papier ?</h2>
        <p>Vous pouvez vous rendre sur <a href='https://cadastre.gouv.fr'><span>cadastre.gouv.fr</span></a></p>
      </div>
    </div>
    <style jsx>{`
      .row {
        display: flex;
      }

      .prose {
        font-size: 1.1em;
      }

      .prose ul {
        list-style: circle;
      }
      `}</style>
  </Section>
)

export default Faq
