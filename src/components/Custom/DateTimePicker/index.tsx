import { MuiDateTimePicker, MuiDateTimePickerProps } from '../../Mui'
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
  )
}

export default DateTimePicker
