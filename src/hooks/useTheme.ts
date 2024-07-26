import { useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme
    return savedTheme || 'light'
  })

  useEffect(() => {
    const doc = document.documentElement
    doc.classList.remove('light', 'dark')

    if (theme) {
      doc.classList.add(theme)
      localStorage.setItem('theme', theme)
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return { theme, setTheme, toggleTheme }
}

export default useTheme