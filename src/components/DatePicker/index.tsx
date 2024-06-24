import React, { memo } from 'react'
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'
import MDFormControl from '../FormControl'
import MDTextField from '../TextField'

export type MDDatePickerProps = DatePickerProps<dayjs.Dayjs> & {
  format?: string
}

const MDDatePicker = ({ format = 'DD/MM/YYYY', ...props }: MDDatePickerProps) => {
  return (
    <MDFormControl>
      <DatePicker
        format={format}
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

export default memo(MDDatePicker)
