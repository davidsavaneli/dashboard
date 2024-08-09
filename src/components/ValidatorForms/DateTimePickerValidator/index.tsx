import React from 'react'
import { useField, useFormikContext } from 'formik'
import { Dayjs } from 'dayjs'
import TextField from '../../TextField'
import InputAdornment from '../../InputAdornment'
import IconButton from '../../IconButton'
import DateTimePicker, { DateTimePickerProps } from '../../DateTimePicker'
import TranslationText from '../../TranslationText'

interface DateTimePickerComponentProps extends DateTimePickerProps {
  name: string
  label?: string
}

const DateTimePickerValidator = ({ name, label, ...props }: DateTimePickerComponentProps) => {
  const { setFieldValue } = useFormikContext()
  const [field, meta] = useField(name as string)

  const handleChange = (date: Dayjs | null) => {
    setFieldValue(name, date, true)
  }

  return (
    <DateTimePicker
      {...field}
      {...props}
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
                  <IconButton iconName='Calendar' disabled={props.disabled} />
                </InputAdornment>
              ),
            }}
          />
        ),
      }}
    />
  )
}

export default DateTimePickerValidator
