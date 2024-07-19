import { MuiDatePicker, MuiDatePickerProps } from '../../Mui'
import TextField from '../TextField'
import Icon from '../Icon'

export interface DatePickerProps extends MuiDatePickerProps {
  format?: string
  error?: boolean
  helperText?: string
}

const PickerIcon = () => <Icon name='Calendar' />

const DatePicker = ({ format = 'DD/MM/YYYY', error = false, helperText, ...props }: DatePickerProps) => {
  return (
    <MuiDatePicker
      className='MuiTextField-withIcon'
      format={format}
      slots={{
        textField: (params) => <TextField {...params} error={error} helperText={helperText} />,
        openPickerIcon: PickerIcon,
      }}
      {...props}
    />
  )
}

export default DatePicker
