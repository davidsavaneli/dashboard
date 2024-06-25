import { MuiDatePicker, MuiDatePickerProps } from '../../Mui'
import FormControl from '../FormControl'
import TextField from '../TextField'

export interface DatePickerProps extends MuiDatePickerProps {
  format?: string
}

const DatePicker = ({ format = 'DD/MM/YYYY', ...props }: DatePickerProps) => {
  return (
    <FormControl>
      <MuiDatePicker
        format={format}
        slots={{
          textField: (params) => <TextField {...params} />,
        }}
        {...props}
      />
    </FormControl>
  )
}

export default DatePicker
