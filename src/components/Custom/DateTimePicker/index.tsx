import { MuiDateTimePicker, MuiDateTimePickerProps } from '../../Mui'
import FormControl from '../FormControl'
import TextField from '../TextField'

export interface DateTimePickerProps extends MuiDateTimePickerProps {
  format?: string
  ampm?: boolean
}

const DateTimePicker = ({ format = 'DD/MM/YYYY - HH:mm', ampm = false, ...props }: DateTimePickerProps) => {
  return (
    <FormControl>
      <MuiDateTimePicker
        format={format}
        ampm={ampm}
        slots={{
          textField: (params) => <TextField {...params} />,
        }}
        {...props}
      />
    </FormControl>
  )
}

export default DateTimePicker
