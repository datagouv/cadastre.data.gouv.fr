import React, {useState} from 'react'

import Section from './section'
import Button from './button'

function Infolettre() {
  const [isShown, setIsShown] = useState(false)

  return (
    <Section title='Infolettre cadastre.data.gouv.fr' subtitle='Inscrivez-vous pour suivre nos actualités' background='grey'>
      <div className='newsletter'>
        {isShown ? (
          <iframe height='660' width='100%' src='https://8d772127.sibforms.com/serve/MUIEAFWacFgOte6b3uZmD0bc5mXLjNOJpMXVBgW5pX--lzy7uS3nCm_gofozoK8Z9HTXblavqzSBqKoo1KGU23jh1DYnE9LT9fwlzFcVSAE0b6Bf_NUTKyP9e8JOBVebotyZynwhgfXDaO6EZokMq-s-cKrfHwvhaTf1w1uwIHvg1cIp5sqSUG_pvb-Xl0gNm6vuf6WM1Fviu4GJ' />
        ) : (
          <Button type='button' onClick={() => setIsShown(!isShown)}>M’inscrire</Button>
        )}
      </div>

      <style jsx>{`
        .newsletter {
          display: flex;
          justify-content: center;
          margin: 1em 0;
        }

        iframe {
          border: none;
        }
        `}</style>
    </Section>
  )
}

export default Infolettre
