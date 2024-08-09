import React from 'react'
import { useField, useFormikContext } from 'formik'
import { Dayjs } from 'dayjs'
import TextField from '../../TextField'
import InputAdornment from '../../InputAdornment'
import IconButton from '../../IconButton'
import DatePicker, { DatePickerProps } from '../../DatePicker'
import TranslationText from '../../TranslationText'

interface DatePickerComponentProps extends DatePickerProps {
  name: string
  label?: string
}

const DatePickerValidator = ({ name, label, ...props }: DatePickerComponentProps) => {
  const { setFieldValue } = useFormikContext()
  const [field, meta] = useField(name as string)

  const handleChange = (date: Dayjs | null) => {
    setFieldValue(name, date, true)
  }

  return (
    <DatePicker
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

export default DatePickerValidator
