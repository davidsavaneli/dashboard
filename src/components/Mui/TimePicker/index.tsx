import { TimePicker as MuiTimePicker, TimePickerProps as MuiTimePickerProps } from '@mui/x-date-pickers/TimePicker'
import dayjs from 'dayjs'

export interface TimePickerProps extends MuiTimePickerProps<dayjs.Dayjs> {}

export const TimePicker = (props: TimePickerProps) => {
  return <MuiTimePicker {...props} />
}
