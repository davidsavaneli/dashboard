import {
  MobileDateTimePicker as MuiDateTimePicker,
  MobileDateTimePickerProps as MuiDateTimePickerProps,
} from '@mui/x-date-pickers/MobileDateTimePicker'
import dayjs from 'dayjs'
import TextField from '../TextField'
import InputAdornment from '../InputAdornment'
import IconButton from '../IconButton'
import TranslationText from '../TranslationText'

export interface DateTimePickerProps extends MuiDateTimePickerProps<dayjs.Dayjs> {
  format?: string
  ampm?: boolean
  error?: boolean
  helperText?: string
}

const DateTimePicker = ({
  format = 'DD/MM/YYYY - HH:mm',
  ampm = false,
  error = false,
  helperText,
  ...props
}: DateTimePickerProps) => {
  return (
    <MuiDateTimePicker
      className='MuiTextField-withIcon'
      format={format}
      ampm={ampm}
      slots={{
        textField: (params) => (
          <TextField
            {...params}
            error={error}
            helperText={helperText}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    disabled={props.disabled}
                    iconName='Calendar'
                  />
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

export default DateTimePicker
