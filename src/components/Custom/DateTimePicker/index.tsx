import React, { memo } from 'react'
import { DateTimePicker, DateTimePickerProps } from '@mui/x-date-pickers/DateTimePicker'
import dayjs from 'dayjs'
import MDFormControl from '../FormControl'
import MDTextField from '../TextField'

export type MDDateTimePickerProps = DateTimePickerProps<dayjs.Dayjs> & {
  format?: string
  ampm?: boolean
}

const MDDateTimePicker = ({ format = 'DD/MM/YYYY - HH:mm', ampm = false, ...props }: MDDateTimePickerProps) => {
  return (
    <MDFormControl>
      <DateTimePicker
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

export default memo(MDDateTimePicker)
