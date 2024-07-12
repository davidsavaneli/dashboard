import { MuiTimePicker, MuiTimePickerProps } from '../../Mui'
import FormControl from '../FormControl'
import TextField from '../TextField'
import Icon from '../Icon'

export interface TimePickerProps extends MuiTimePickerProps {
  format?: string
  ampm?: boolean
}

const PickerIcon = () => <Icon name='Clock' />

const TimePicker = ({ format = 'HH:mm', ampm = false, ...props }: TimePickerProps) => {
  return (
    <FormControl>
      <MuiTimePicker
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

export default TimePicker
