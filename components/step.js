import PropTypes from 'prop-types'

import theme from '../styles/theme'

const Step = ({id, title, disabled, children}) => (
  <div id={id} className={`step ${disabled ? 'disabled' : ''}`}>
    <h3>{title}</h3>
    <div>
      {children}
    </div>
    <style jsx>{`
      .step {
        padding-bottom: 1em;
      }

      .disabled h3 {
        color: ${theme.colors.grey};
      }

      .disabled > div {
        display: none;
      }
      `}</style>
  </div>
)

Step.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}

Step.defaultProps = {
  id: ''
}

export default Step
