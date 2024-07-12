import { MuiDateTimePicker, MuiDateTimePickerProps } from '../../Mui'
import FormControl from '../FormControl'
import TextField from '../TextField'
import Icon from '../Icon'

export interface DateTimePickerProps extends MuiDateTimePickerProps {
  format?: string
  ampm?: boolean
}

const PickerIcon = () => <Icon name='Calendar' />

const DateTimePicker = ({ format = 'DD/MM/YYYY - HH:mm', ampm = false, ...props }: DateTimePickerProps) => {
  return (
    <FormControl>
      <MuiDateTimePicker
        className='MuiTextField-withIcon'
        format={format}
        ampm={ampm}
        slots={{
          textField: (params) => <TextField {...params} />,
          openPickerIcon: PickerIcon,
        }}
        {...props}
      />
    </FormControl>
  )
}

export default DateTimePicker
