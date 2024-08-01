import { createContext, ReactNode, useContext } from 'react'
import useTheme, { ThemeProps } from '../hooks/useTheme'
import useShowHideDrawer from '../hooks/useShowHideDrawer'

interface UIContextProps {
  theme: ThemeProps
  toggleTheme: () => void
  open: boolean
  showDrawer: () => void
  hideDrawer: () => void
  toggleDrawer: () => void
}

const UIContext = createContext<UIContextProps | undefined>(undefined)

export const UIProvider = ({ children }: { children: ReactNode }) => {
  const { theme, toggleTheme } = useTheme()
  const { open, showDrawer, hideDrawer, toggleDrawer } = useShowHideDrawer()

  return (
    <UIContext.Provider value={{ theme, toggleTheme, open, showDrawer, hideDrawer, toggleDrawer }}>
      {children}
    </UIContext.Provider>
  )
}

const useUIContext = () => {
  const context = useContext(UIContext)
  if (!context) {
    throw new Error('useUIContext must be used within a UIProvider')
  }
  return context
}

export default useUIContext
