import React, {useState} from 'react'
import PropTypes from 'prop-types'

function WrapperShowHide({
  children,
  isOpenByDefault = false,
  labelWhenOpened = 'Fermer',
  labelWhenClosed = 'Ouvrir'
}) {
  const [isOpen, setOpen] = useState(isOpenByDefault)
  const label = isOpen ? labelWhenOpened : labelWhenClosed

  const toggle = function () {
    setOpen(!isOpen)
  }

  return (
    <>
      <button type='button' onClick={toggle} className='button-open-close' style={isOpen ? {display: 'None'} : {display: 'inherit'}}>{label}</button>
      {isOpen && (
        <div className={isOpen ? 'open' : 'closed'}>
          <div>{children}</div>
          <button type='button' className='button-open-close' onClick={toggle}>{label}</button>
        </div>
      )}
      <style jsx>{`
      .button-open-close {
        width: 80%;
        padding: 0.8em;
        display: table;
        margin: 0 auto;
        margin-top: 0.8em;
        background: #0081D5;
        color: #fff;
        font-size: 1em;
        font-family: "Evolventa","Trebuchet MS",sans-serif;
        font-weight: bold;
        border: 0;
      }
    `}</style>
    </>
  )
}

WrapperShowHide.propTypes = {
  children: PropTypes.element.isRequired,
  isOpenByDefault: PropTypes.string,
  labelWhenOpened: PropTypes.string,
  labelWhenClosed: PropTypes.string
}

export default WrapperShowHide
