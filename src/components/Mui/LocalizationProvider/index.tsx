import {
  LocalizationProvider as MuiLocalizationProvider,
  LocalizationProviderProps as MuiLocalizationProviderProps,
} from '@mui/x-date-pickers/LocalizationProvider'
import { Dayjs } from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export interface LocalizationProviderProps extends MuiLocalizationProviderProps<Dayjs, any> {}

export const LocalizationProvider = ({ dateAdapter = AdapterDayjs, ...props }: LocalizationProviderProps) => {
  return <MuiLocalizationProvider dateAdapter={dateAdapter} {...props}></MuiLocalizationProvider>
}
