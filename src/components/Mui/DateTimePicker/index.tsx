import {
  MobileDateTimePicker as MuiDateTimePicker,
  MobileDateTimePickerProps as MuiDateTimePickerProps,
} from '@mui/x-date-pickers/MobileDateTimePicker'
import dayjs from 'dayjs'

export interface DateTimePickerProps extends MuiDateTimePickerProps<dayjs.Dayjs> {}

export const DateTimePicker = (props: DateTimePickerProps) => {
  return <MuiDateTimePicker {...props} />
}
