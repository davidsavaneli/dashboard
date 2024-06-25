import { ReactNode } from 'react'
import { MuiLocalizationProvider, MuiLocalizationProviderProps } from '../../Mui'

export interface LocalizationProviderProps extends MuiLocalizationProviderProps {
  children: ReactNode
}

const LocalizationProvider = ({ children }: LocalizationProviderProps) => {
  return <MuiLocalizationProvider children={children} />
}

export default LocalizationProvider
