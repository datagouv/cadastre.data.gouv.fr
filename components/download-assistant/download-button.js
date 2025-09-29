import PropTypes from 'prop-types'
import React from 'react'
import ButtonLink from '../button-link.js'

class DownloadButton extends React.Component {
  render() {
    const {href} = this.props

    return (
      <div id='download' className='submit'>
        <ButtonLink href={href}>
          Télécharger
        </ButtonLink>

        <style jsx>{`
          .submit {
            text-align: center;
            padding: 1em 0 2em 0;
          }
        `}</style>
      </div>
    )
  }
}

DownloadButton.propTypes = {
  href: PropTypes.string,
}

DownloadButton.defaultProps = {
  href: null,
}

export default DownloadButton
