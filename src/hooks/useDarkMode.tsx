import React, { createContext, ReactNode, useContext, useState, useCallback, useEffect } from 'react'

// Define the types for the hook's return value and context
interface UseDarkModeReturn {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
  toggleDarkMode: () => void
}

interface DarkModeContextType {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
  toggleDarkMode: () => void
}

// Helper function to get initial darkMode value from localStorage
const getInitialDarkMode = (): boolean => {
  const savedMode = localStorage.getItem('darkMode')
  return savedMode !== null ? JSON.parse(savedMode) : false
}

// Dark Mode Hook
const useDarkMode = (): UseDarkModeReturn => {
  const [darkMode, setDarkMode] = useState<boolean>(getInitialDarkMode)

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => !prev)
  }, [])

  return { darkMode, setDarkMode, toggleDarkMode }
}

// Dark Mode Context and Provider
const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined)

export const DarkModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { darkMode, setDarkMode, toggleDarkMode } = useDarkMode()

  // Effect to add/remove the 'dark' class based on darkMode state
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  // Effect to save darkMode state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>
  )
}

export const useDarkModeContext = (): DarkModeContextType => {
  const context = useContext(DarkModeContext)
  if (context === undefined) {
    throw new Error('useDarkModeContext must be used within a DarkModeProvider')
  }
  return context
}

export default useDarkMode
