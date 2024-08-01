import React, { createContext, ReactNode, useContext, useState, useCallback, useEffect } from 'react'

// Define the types for the hook's return value and context
interface UseShowDrawerReturn {
  showDrawer: boolean
  setShowDrawer: (showDrawer: boolean) => void
  toggleShowDrawer: () => void
}

interface ShowDrawerContextType {
  showDrawer: boolean
  setShowDrawer: (showDrawer: boolean) => void
  toggleShowDrawer: () => void
}

// Helper function to get initial showDrawer value from localStorage
const getInitialShowDrawer = (): boolean => {
  const savedValue = localStorage.getItem('showDrawer')
  return savedValue !== null ? JSON.parse(savedValue) : false
}

// Show Drawer Hook
const useShowDrawer = (): UseShowDrawerReturn => {
  const [showDrawer, setShowDrawer] = useState<boolean>(getInitialShowDrawer)

  const toggleShowDrawer = useCallback(() => {
    setShowDrawer((prev) => !prev)
  }, [])

  return { showDrawer, setShowDrawer, toggleShowDrawer }
}

// Show Drawer Context and Provider
const ShowDrawerContext = createContext<ShowDrawerContextType | undefined>(undefined)

export const ShowDrawerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { showDrawer, setShowDrawer, toggleShowDrawer } = useShowDrawer()

  // Effect to save showDrawer state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('showDrawer', JSON.stringify(showDrawer))
  }, [showDrawer])

  return (
    <ShowDrawerContext.Provider value={{ showDrawer, setShowDrawer, toggleShowDrawer }}>
      {children}
    </ShowDrawerContext.Provider>
  )
}

export const useShowDrawerContext = (): ShowDrawerContextType => {
  const context = useContext(ShowDrawerContext)
  if (context === undefined) {
    throw new Error('useShowDrawerContext must be used within a ShowDrawerProvider')
  }
  return context
}

export default useShowDrawer
