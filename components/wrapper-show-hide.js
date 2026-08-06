import React, {useState} from 'react'
import PropTypes from 'prop-types'

const WrapperShowHide = ({
  children,
  isOpenByDefault = false,
  labelWhenOpened = 'Fermer',
  labelWhenClosed = 'Ouvrir',
}) => {
  const [open, setOpen] = useState(isOpenByDefault)
  const label = open ? labelWhenOpened : labelWhenClosed

  const toggle = function () {
    setOpen(!open)
  }

  return (
    <>
      <button type='button' onClick={toggle} className='button-open-close' style={open ? {display: 'None'} : {display: 'inherit'}}>{label}</button>
      {open && (
        <div className={open ? 'open' : 'closed'}>
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
        background: #3558A2;
        color: #fff;
        font-size: 1em;
        font-family: "Marianne","Trebuchet MS",sans-serif;
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
  labelWhenClosed: PropTypes.string,
}

export default WrapperShowHide
