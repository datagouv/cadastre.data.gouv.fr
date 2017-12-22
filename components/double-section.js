import PropTypes from 'prop-types'

const DoubleSection = ({children, link, href}) => (
  <div className='container'>
    <div className='double-section'>
      {children}
    </div>
    {href && link && <a href={href}>{link}</a>}
    <style jsx>{`
      .container {
        text-align: center;
        padding: 1em 0;
      }

      a {
        font-size: 1.2em;
        font-style: italic;
        text-align: center;
        color: black;
        text-decoration: underline;
      }
      .double-section {
        display: flex;
        justify-content: space-around;
        flex-flow: wrap;
      }
      `}</style>
  </div>
)

DoubleSection.propTypes = {
  children: PropTypes.node,
  link: PropTypes.string,
  href: PropTypes.string
}

DoubleSection.defaultProps = {
  children: null,
  link: null,
  href: null
}

export default DoubleSection
