import {
  MobileTimePicker as MuiTimePicker,
  MobileTimePickerProps as MuiTimePickerProps,
} from '@mui/x-date-pickers/MobileTimePicker'
import dayjs from 'dayjs'

export interface TimePickerProps extends MuiTimePickerProps<dayjs.Dayjs> {}

export const TimePicker = (props: TimePickerProps) => {
  return <MuiTimePicker {...props} />
}
