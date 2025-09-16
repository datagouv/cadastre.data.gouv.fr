export function isWebGLSupported() {
  try {
    const canvas = document.createElement('canvas')

    return Boolean(
      globalThis.WebGLRenderingContext && (
        canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      ),
    )
  } catch {
    return false
  }
}

export default isWebGLSupported
