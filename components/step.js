import React from 'react'

import theme from '../styles/theme'

function Step({id = '', title, disabled, children}) {
  return (
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
}

export default Step
