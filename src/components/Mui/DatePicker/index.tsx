import {
  MobileDatePicker as MuiDatePicker,
  MobileDatePickerProps as MuiDatePickerProps,
} from '@mui/x-date-pickers/MobileDatePicker'
import dayjs from 'dayjs'

export interface DatePickerProps extends MuiDatePickerProps<dayjs.Dayjs> {}

export const DatePicker = (props: DatePickerProps) => {
  return <MuiDatePicker {...props} />
}
