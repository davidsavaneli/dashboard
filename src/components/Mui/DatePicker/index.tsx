import { DatePicker as MuiDatePicker, DatePickerProps as MuiDatePickerProps } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'

export interface DatePickerProps extends MuiDatePickerProps<dayjs.Dayjs> {}

export const DatePicker = (props: DatePickerProps) => {
  return <MuiDatePicker {...props} />
}
