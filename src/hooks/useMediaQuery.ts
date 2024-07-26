type QueryType =
  | '1919.98'
  | '1679.98'
  | '1439.98'
  | '1365.98'
  | '1279.98'
  | '1023.98'
  | '959.98'
  | '767.98'
  | '575.98'
  | '414.98'

import { useState, useEffect } from 'react'

const useMediaQuery = (query: QueryType) => {
  const [matches, setMatches] = useState<boolean>(false)

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${parseFloat(query)}px)`)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [matches, query])

  return matches
}

export default useMediaQuery
