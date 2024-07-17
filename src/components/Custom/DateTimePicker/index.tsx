import { MuiDateTimePicker, MuiDateTimePickerProps } from '../../Mui'
import FormControl from '../FormControl'
import TextField from '../TextField'
import Icon from '../Icon'

export interface DateTimePickerProps extends MuiDateTimePickerProps {
  format?: string
  ampm?: boolean
  error?: boolean
  helperText?: string
}

const PickerIcon = () => <Icon name='Calendar' />

const DateTimePicker = ({
  format = 'DD/MM/YYYY - HH:mm',
  ampm = false,
  error = false,
  helperText,
  ...props
}: DateTimePickerProps) => {
  return (
    <FormControl>
      <MuiDateTimePicker
        className='MuiTextField-withIcon'
        format={format}
        ampm={ampm}
        slots={{
          textField: (params) => <TextField {...params} error={error} helperText={helperText} />,
          openPickerIcon: PickerIcon,
        }}
        {...props}
      />
    </FormControl>
  )
}

export default DateTimePicker
