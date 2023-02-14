import React from 'react'
import App from 'next/app'

class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props
    return (
      <>
        <Component {...pageProps} />
        <style jsx global>{`
        .feather-icon svg {
          width: 1em;
          height: 1em;
        }
      `}</style>
      </>
    )
  }
}

export default MyApp
