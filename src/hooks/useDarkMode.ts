import { useState, useEffect, useCallback } from 'react'

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem('darkMode')
    return savedMode ? JSON.parse(savedMode) : false
  })

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prevMode) => !prevMode)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  return { darkMode, setDarkMode, toggleDarkMode }
}

export default useDarkMode
