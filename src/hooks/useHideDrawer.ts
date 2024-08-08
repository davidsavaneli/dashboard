import { useState, useEffect, useCallback } from 'react'

const useHideDrawer = () => {
  const [hideDrawer, setHideDrawer] = useState<boolean>(false)

  const toggleHideDrawer = useCallback(() => {
    setHideDrawer((prevMode) => !prevMode)
  }, [])

  useEffect(() => {
    if (hideDrawer) {
      document.documentElement.classList.add('hide-drawer')
    } else {
      document.documentElement.classList.remove('hide-drawer')
    }
  }, [hideDrawer])

  return { hideDrawer, setHideDrawer, toggleHideDrawer }
}

export default useHideDrawer
