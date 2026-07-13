import {useEffect, useRef} from 'react'

export default function usePrevious(value) {
  const reference = useRef()

  useEffect(() => {
    reference.current = value
  }, [value])

  return reference.current
}

