import { ReactNode } from 'react'
import {
  LocalizationProvider as MuiLocalizationProvider,
  LocalizationProviderProps as MuiLocalizationProviderProps,
} from '@mui/x-date-pickers/LocalizationProvider'
import { Dayjs } from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export interface LocalizationProviderProps extends MuiLocalizationProviderProps<Dayjs, any> {
  children: ReactNode
}

const LocalizationProvider = ({ dateAdapter = AdapterDayjs, children }: LocalizationProviderProps) => {
  return <MuiLocalizationProvider dateAdapter={dateAdapter} children={children} />
}

export default LocalizationProvider
