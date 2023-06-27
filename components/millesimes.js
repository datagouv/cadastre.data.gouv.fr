import React from 'react'
import PropTypes from 'prop-types'

import theme from '../styles/theme'

import Millesime from './millesime'

function Millesimes({millesimes, getUrl}) {
  return (
    <div className='grid'>
      {millesimes.map(millesime => (
        <div key={millesime.date}>
          {millesime.latest ?
            <div className='latest line'><span>Dernier millésime</span></div> :
            <div className='latest' />}
          <Millesime
            date={millesime.date}
            path={millesime.path}
            formats={millesime.formats}
            baseUrl={millesime.baseUrl}
            getUrl={getUrl} />
        </div>
      ))}
      <style jsx>{`
      .grid {
        grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
      }

      .latest {
        padding: 1.5em;
      }

      .latest.line {
        padding: 0.5em;
        text-align: center;
        color: ${theme.primary};

        border-bottom: 1px solid ${theme.primary};
        line-height:0.1em;
        margin: 10px 0 20px;
      }

      .latest span {
        background: ${theme.backgroundGrey};
        padding: 0 10px;
      }
    `}</style>
    </div>
  )
}

Millesimes.propTypes = {
  millesimes: PropTypes.array.isRequired,
  getUrl: PropTypes.func.isRequired
}

export default Millesimes
