export default () => (
  <div>
    <a href='http://www.etalab.gouv.fr' title='Aller sur le blog d’Etalab'>
      <img src='/static/images/logos/etalab.svg' alt='Aller sur le blog d’Etalab' />
    </a>
    <a href='https://www.economie.gouv.fr/dgfip' title='Aller sur le site de la DGFiP'>
      <img src='/static/images/logos/dgfip.png' alt='Aller sur le site de la DGFiP' />
    </a>

    <style jsx>{`
      div {
        margin-bottom: 1em;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-end;
      }

      a {
        margin-bottom: 1.2em;
      }

      img {
        width: 150px;
        height: auto;
      }

      @media (max-width: 768px) {
        div {
          justify-content: center;
          margin-top: 2em;
        }
      }
    `}</style>
  </div>
)
