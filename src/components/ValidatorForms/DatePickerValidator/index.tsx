import React from 'react'
import { useField, useFormikContext } from 'formik'
import { Dayjs } from 'dayjs'
import TextField from '../../TextField'
import InputAdornment from '../../InputAdornment'
import IconButton from '../../IconButton'
import DatePicker from '../../DatePicker'
import TranslationText from '../../TranslationText'

type DatePickerComponentProps = {
  name: string
  label?: string
}

const DatePickerValidator: React.FC<DatePickerComponentProps> = ({ name, label }) => {
  const { setFieldValue } = useFormikContext()
  const [field, meta] = useField(name as string)

  const handleChange = (date: Dayjs | null) => {
    setFieldValue(name, date, true)
  }

  return (
    <DatePicker
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
                  <IconButton iconName='Calendar' tooltipTitle={<TranslationText text='chooseDate' />} />
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
