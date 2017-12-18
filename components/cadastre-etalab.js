import Section from './section'
import Ressource from './ressource'

const CadastreEtalab = () => (
  <div>
    <Section>
      <div className='main'>
        <h4>Différence par rapport au PCI Vecteur</h4>

        <p>Contrairement au <a href='https://www.data.gouv.fr/fr/datasets/58e5924b88ee3802ca255566/'>Plan Cadastral Informatisé</a> au format EDIGÉO qui est un ensemble de 600 000 feuilles cadastrales avec de nombreux éléments liés à la fiscalité ou à l’habillage du plan, cette version retravaillée par Etalab se concentre sur le découpage parcellaire et sur les bâtiments.</p>
        <p>Les différentes couches d’information géographique sont constituées par juxtaposition des feuilles, sans correction.</p>
        <p>Ces données incluent aussi le <a href='https://www.data.gouv.fr/fr/datasets/59d2c07888ee3814dbdaf501'>référentiel cadastral géré par l’Eurométropole de Strasbourg</a>.</p>
        <p>Enfin cette version est disponible directement dans des formats de données géographiques usuels, ce qui rend son utilisation plus simple.</p>

        <h4>Couverture</h4>

        <p>32 864 communes sont couvertes par le PCI Vecteur, sur un total de près de 36 000.
        Les plans des autres communes sont disponibles sous forme d’images, via le PCI Image (diffusion prévue courant octobre).</p>
        <p>Les collectivités d’outre-mer de Saint-Martin et de Saint-Barthelemy sont présentes et historiquement intégrées dans le département de la Guadeloupe (971).</p>

        <h4>Couches de données</h4>

        <ul>
          <li>parcelles</li>
          <li>feuilles</li>
          <li>sections</li>
          <li>communes</li>
          <li>batiments</li>
        </ul>

        <h4>Millésimes</h4>

        <ul>
          <li>6 juillet 2017</li>
          <li>12 octobre 2017 (plus récent)</li>
        </ul>

        <h4>Fichiers</h4>

        <p>Les données sont actuellement disponibles au format <a href='http://geojson.org/' rel='nofollow'>GeoJSON</a> compressé.</p>
        <p>Le téléchargement se fait par couche, et au choix <strong>par département</strong> ou <strong>par commune</strong>.</p>
        <p>L’arborescence est la suivante :</p>
        <p>Découpage communal :</p>
        <div>
          <pre><code>{`{format}/communes/{code_departement}/{code_commune}/cadastre-{code_commune}-{nom_couche}.json.gz`}</code></pre>
        </div>
        <p>Découpage départemental :</p>
        <div>
          <pre><code>{`{format}/departements/{code_departement}/cadastre-{code_departement}-{nom_couche}.json.gz`}</code></pre>
        </div>
        <p>Exemple :</p>
        <p><a href='https://cadastre.data.gouv.fr/data/etalab-cadastre/latest/geojson/communes/01/01001/cadastre-01001-batiments.json.gz' rel='nofollow'>https://cadastre.data.gouv.fr/data/etalab-cadastre/latest/geojson/communes/01/01001/cadastre-01001-batiments.json.gz</a></p>

        <h4>Historique</h4>

        <ul>
          <li>30/09/2017 : première diffusion des données</li>
          <li>08/11/2017 : nouveau millésime PCI + correction projection Saint-Barthelemy et Saint-Martin + intégration données Strasbourg + corrections diverses (<a href='https://github.com/etalab/cadastre/issues?q=is%3Aclosed+label%3A%22cadastre+data%22+is%3Aissue+milestone%3A%22Sprint+%232%22' rel='nofollow'>détails</a>)</li>
        </ul>
      </div>
    </Section>
    <Section title='Ressources' background='grey'>
      <div className='ressources'>
        <Ressource
          title='Données dernier millésime'
          lastModification='Dernière modification le jeudi 9 novembre 2017'
          format='geojson'
          link='https://cadastre.data.gouv.fr/data/etalab-cadastre/latest/' />
        <Ressource
          title='Données millésime 12 octobre 2017'
          lastModification='Dernière modification le jeudi 9 novembre 2017'
          format='geojson'
          link='https://cadastre.data.gouv.fr/data/etalab-cadastre/2017-10-12/' />

        <Ressource
          title='Données millésime 6 juillet 2017'
          lastModification='Dernière modification le vendredi 29 septembre 2017'
          format='geojson'
          link='https://cadastre.data.gouv.fr/data/etalab-cadastre/2017-07-06/' />
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

export default CadastreEtalab
