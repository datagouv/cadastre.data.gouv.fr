class MapboxGLButtonControl {
  constructor({className, title, innerHTML, eventHandler}) {
    this._className = className
    this._title = title
    this._innerHtml = innerHTML
    this._eventHandler = eventHandler
  }

  onAdd(map) {
    this._map = map
    this._btn = document.createElement('button')
    this._btn.className = `mapboxgl-ctrl-icon ${this._className} visible`
    this._btn.type = 'button'
    this._btn.title = this._title
    this._btn.innerHTML = this._innerHtml
    this._btn.addEventListener('click', () => this._eventHandler(this))

    this._container = document.createElement('div')
    this._container.className = 'mapboxgl-ctrl-group mapboxgl-ctrl'
    this._container.append(this._btn)

    return this._container
  }

  onRemove() {
    this._container.parentNode.removeChild(this._container)
    this._map = undefined
  }
}

export default MapboxGLButtonControl
