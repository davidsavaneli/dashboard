import React from 'react'
import { useField, useFormikContext } from 'formik'
import { Dayjs } from 'dayjs'
import TextField from '../../TextField'
import InputAdornment from '../../InputAdornment'
import IconButton from '../../IconButton'
import TimePicker, { TimePickerProps } from '../../TimePicker'
import TranslationText from '../../TranslationText'

interface TimePickerValidatorProps extends TimePickerProps {
  name: string
  label?: string
}

const TimePickerValidator = ({ name, label, ...props }: TimePickerValidatorProps) => {
  const { setFieldValue } = useFormikContext()
  const [field, meta] = useField(name as string)

  const handleChange = (date: Dayjs | null) => {
    setFieldValue(name, date, true)
  }

  return (
    <TimePicker
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
                  <IconButton
                    iconName='Clock'
                    disabled={props.disabled}
                    tooltipTitle={!props.disabled && <TranslationText text='chooseTime' />}
                  />
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
