import PropTypes from 'prop-types'

import theme from '../styles/theme'

const Step = ({id, title, disabled, children}) => (
  <div id={id} className={`${disabled ? 'disabled' : ''}`}>
    <h3>{title}</h3>
    <div>
      {children}
    </div>
    <style jsx>{`
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
