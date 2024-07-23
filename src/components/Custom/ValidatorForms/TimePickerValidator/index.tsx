import React from 'react'
import { useField, useFormikContext } from 'formik'
import { Dayjs } from 'dayjs'
import TextField from '../../TextField'
import InputAdornment from '../../InputAdornment'
import IconButton from '../../IconButton'
import TimePicker from '../../TimePicker'

type TimePickerComponentProps = {
  name: string
  label?: string
}

const TimePickerValidator: React.FC<TimePickerComponentProps> = ({ name, label }) => {
  const { setFieldValue } = useFormikContext()
  const [field, meta] = useField(name as string)

  const handleChange = (date: Dayjs | null) => {
    setFieldValue(name, date, true)
  }

  return (
    <TimePicker
      {...field}
      value={field.value || null}
      onChange={handleChange}
      slots={{
        textField: (params) => (
          <TextField
            {...params}
            className='MuiTextField-withIcon'
            label={label}
            error={Boolean(meta.touched && meta.error)}
            helperText={meta.touched && meta.error ? meta.error : ''}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton iconName='Calendar' />
                </InputAdornment>
              ),
            }}
          />
        ),
      }}
    />
  )
}

export default TimePickerValidator
