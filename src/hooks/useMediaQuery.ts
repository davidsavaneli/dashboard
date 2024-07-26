import { useState, useEffect } from 'react'

type QueryType = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs'

const queryMap: Record<QueryType, number> = {
  xxl: 1919.98,
  xl: 1679.98,
  lg: 1439.98,
  md: 1279.98,
  sm: 1023.98,
  xs: 767.98,
  xxs: 575.98,
}

const useMediaQuery = (query: QueryType) => {
  const [matches, setMatches] = useState<boolean>(false)

  useEffect(() => {
    const mediaQuery = `(max-width: ${queryMap[query]}px)`
    const media = window.matchMedia(mediaQuery)

    const updateMatches = () => setMatches(media.matches)
    updateMatches()

    media.addEventListener('change', updateMatches)
    return () => media.removeEventListener('change', updateMatches)
  }, [query])

  return matches
}

export default useMediaQuery
