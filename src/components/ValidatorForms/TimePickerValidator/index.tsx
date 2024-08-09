import React from 'react'
import { useField, useFormikContext } from 'formik'
import { Dayjs } from 'dayjs'
import TextField from '../../TextField'
import InputAdornment from '../../InputAdornment'
import IconButton from '../../IconButton'
import TimePicker from '../../TimePicker'
import TranslationText from '../../TranslationText'

type TimePickerValidatorProps = {
  name: string
  label?: string
}

const TimePickerValidator: React.FC<TimePickerValidatorProps> = ({ name, label }) => {
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
                  <IconButton iconName='Clock' tooltipTitle={<TranslationText text='chooseTime' />} />
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
