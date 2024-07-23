import { MuiDatePicker, MuiDatePickerProps } from '../../Mui'
import TextField from '../TextField'

export interface DatePickerProps extends MuiDatePickerProps {
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
        textField: (params) => <TextField {...params} error={error} helperText={helperText} />,
      }}
      {...props}
    />
  )
}

export default DatePicker
