import React from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'next/router'

import piwik from '../lib/piwik'

import Meta from '../components/meta'
import MainStyle from '../components/main-style'
import Header from '../components/header'
import Footer from '../components/footer'

import theme from '../styles/theme'

class Layout extends React.Component {
  componentDidMount() {
    const {router} = this.props

    setTimeout(() => {
      piwik.track(router)
    }, 400)
  }

  render() {
    const {title, description, fullscreen, children} = this.props

    return (
      <div>
        <Meta title={title} description={description} />
        <MainStyle />
        <Header />
        <main>
          { children }
        </main>
        {!fullscreen && <Footer />}
        <style jsx>{`
          div {
             display: flex;
             flex-direction: column;
             min-height: ${fullscreen ? '0' : '100vh'};
             background-color: ${theme.colors.white};
           }

           main {
             flex: 1;
           }
        `}</style>
      </div>
    )
  }
}

Layout.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  children: PropTypes.node,
  title: PropTypes.string,
  fullscreen: PropTypes.bool,
  description: PropTypes.string
}

Layout.defaultProps = {
  children: null,
  title: null,
  description: null,
  fullscreen: false
}

export default withRouter(Layout)
