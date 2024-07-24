import {
  MobileTimePicker as MuiTimePicker,
  MobileTimePickerProps as MuiTimePickerProps,
} from '@mui/x-date-pickers/MobileTimePicker'
import dayjs from 'dayjs'
import TextField from '../TextField'

export interface TimePickerProps extends MuiTimePickerProps<dayjs.Dayjs> {
  format?: string
  ampm?: boolean
  error?: boolean
  helperText?: string
}

const TimePicker = ({ format = 'HH:mm', ampm = false, error = false, helperText, ...props }: TimePickerProps) => {
  return (
    <MuiTimePicker
      className='MuiTextField-withIcon'
      format={format}
      ampm={ampm}
      slots={{
        textField: (params) => <TextField {...params} error={error} helperText={helperText} />,
      }}
      {...props}
    />
  )
}

export default TimePicker
