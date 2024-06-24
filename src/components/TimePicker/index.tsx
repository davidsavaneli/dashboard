import React, { memo } from 'react'
import { TimePicker, TimePickerProps } from '@mui/x-date-pickers/TimePicker'
import dayjs from 'dayjs'
import MDFormControl from '../FormControl'
import MDTextField from '../TextField'

export type MDTimePickerProps = TimePickerProps<dayjs.Dayjs> & {
  format?: string
  ampm?: boolean
}

const MDTimePicker = ({ format = 'HH:mm', ampm = false, ...props }: MDTimePickerProps) => {
  return (
    <MDFormControl>
      <TimePicker
        format={format}
        ampm={ampm}
        slotProps={{
          inputAdornment: {
            position: 'end',
          },
        }}
        slots={{
          textField: (params) => <MDTextField {...params} />,
        }}
        {...props}
      />
    </MDFormControl>
  )
}

export default memo(MDTimePicker)
