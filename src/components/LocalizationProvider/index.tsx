import React, { ReactNode, memo } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export type MDLocalizationProviderProps = { children: ReactNode }

const MDLocalizationProvider = ({ children }: MDLocalizationProviderProps) => {
  return <LocalizationProvider dateAdapter={AdapterDayjs}>{children}</LocalizationProvider>
}

export default memo(MDLocalizationProvider)
