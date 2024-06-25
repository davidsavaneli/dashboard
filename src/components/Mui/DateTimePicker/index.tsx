import {
  DateTimePicker as MuiDateTimePicker,
  DateTimePickerProps as MuiDateTimePickerProps,
} from '@mui/x-date-pickers/DateTimePicker'
import dayjs from 'dayjs'

export interface DateTimePickerProps extends MuiDateTimePickerProps<dayjs.Dayjs> {}

export const DateTimePicker = (props: DateTimePickerProps) => {
  return <MuiDateTimePicker {...props} />
}
