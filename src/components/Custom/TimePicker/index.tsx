import { MuiTimePicker, MuiTimePickerProps } from '../../Mui'
import TextField from '../TextField'
import Icon from '../Icon'

export interface TimePickerProps extends MuiTimePickerProps {
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
