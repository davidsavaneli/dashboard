import { useState, useEffect } from 'react'

const useShowHideDrawer = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const test = () => {
      open
        ? document.documentElement.classList.add('show-drawer')
        : document.documentElement.classList.remove('show-drawer')
    }

    test()
  }, [open])

  const showDrawer = () => {
    setOpen(true)
  }

  const hideDrawer = () => setOpen(false)
  const toggleDrawer = () => setOpen((prevIsDarkMode) => !prevIsDarkMode)

  return { open, showDrawer, hideDrawer, toggleDrawer }
}

export default useShowHideDrawer
