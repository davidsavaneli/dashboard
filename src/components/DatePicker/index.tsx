import {
  MobileDatePicker as MuiDatePicker,
  MobileDatePickerProps as MuiDatePickerProps,
} from '@mui/x-date-pickers/MobileDatePicker'
import dayjs from 'dayjs'
import TextField from '../TextField'
import InputAdornment from '../InputAdornment'
import IconButton from '../IconButton'

export interface DatePickerProps extends MuiDatePickerProps<dayjs.Dayjs> {
  format?: string
  error?: boolean
  helperText?: string
}

const DatePicker = ({ format = 'DD/MM/YYYY', error = false, helperText, ...props }: DatePickerProps) => {
  return (
    <MuiDatePicker
      className='MuiTextField-withIcon'
      format={format}
      slots={{
        textField: (params) => (
          <TextField
            {...params}
            error={error}
            helperText={helperText}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton iconName='Calendar' />
                </InputAdornment>
              ),
            }}
          />
        ),
      }}
      {...props}
    />
  )
}

export default DatePicker
