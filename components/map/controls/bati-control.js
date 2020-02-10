import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {Home} from 'react-feather'
import css from 'styled-jsx/css'
import MapboxGLButtonControl from '../../mapbox/control'

export const styleControl = css.global`
  .mapboxgl-ctrl-icon.bati.none:before {
    content: "\\";
    position: absolute;
    display: inline-block;
    transform: rotate(-40deg) translateY(-6px) translateX(10px);
    font-size: 36px;
    font-weight: bolder;
  }
`

const revVisibility = {
  visible: 'none',
  none: 'visible'
}

const BatiControl = new MapboxGLButtonControl({
  className: 'bati',
  title: 'Afficher/masquer le bâti',
  innerHTML: ReactDOMServer.renderToStaticMarkup(
    <Home />
  ),
  eventHandler: control => {
    const visibility = revVisibility[control._map.getLayoutProperty('batiments-line', 'visibility')]
    control._map.setLayoutProperty('batiments-line', 'visibility', visibility)
    control._map.setLayoutProperty('batiments-fill', 'visibility', visibility)

    control._btn.className = `mapboxgl-ctrl-icon ${control._className} ${visibility}`
  }
})

export default BatiControl
