import { MuiTimePicker, MuiTimePickerProps } from '../../Mui'
import FormControl from '../FormControl'
import TextField from '../TextField'

export interface TimePickerProps extends MuiTimePickerProps {
  format?: string
  ampm?: boolean
}

const TimePicker = ({ format = 'HH:mm', ampm = false, ...props }: TimePickerProps) => {
  return (
    <FormControl>
      <MuiTimePicker
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

export default TimePicker
