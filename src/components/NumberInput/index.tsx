import React, { useState, useEffect, ChangeEvent } from 'react'
import TextField, { TextFieldProps } from '../TextField'
import IconButton from '../IconButton'
import InputAdornment from '../InputAdornment'

export type NumberInputProps = TextFieldProps & {
  label?: TextFieldProps['label']
  name?: TextFieldProps['name']
  value?: number
  min?: number
  max?: number
  onChange?: (value: number) => void
  error?: boolean
  helperText?: TextFieldProps['helperText']
  disabled?: TextFieldProps['disabled']
}

const NumberInput: React.FC<NumberInputProps> = ({
  label,
  name,
  value = 0,
  min = 0,
  max = 999999,
  onChange,
  error,
  helperText,
  disabled,
}) => {
  const [val, setVal] = useState<number>(value)

  useEffect(() => setVal(value ?? 0), [value])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value)

    if (!isNaN(newValue)) {
      const clampedValue = Math.max(min, Math.min(newValue, max))
      onChange ? onChange(clampedValue) : setVal(clampedValue)
    }
  }

  const increaseValue = () => {
    const newValue = Math.min(val + 1, max)
    onChange ? onChange(newValue) : setVal(newValue)
  }

  const decreaseValue = () => {
    const newValue = Math.max(val - 1, min)
    onChange ? onChange(newValue) : setVal(newValue)
  }

  return (
    <TextField
      className='MuiTextField-withIcon'
      type='number'
      label={label}
      name={name}
      value={val}
      onChange={handleChange}
      inputProps={{ min, max, step: 1 }}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton iconName='Minus' onClick={decreaseValue} variant='filled' disabled={val <= min || disabled} />
            &nbsp;
            <IconButton iconName='Add' onClick={increaseValue} variant='filled' disabled={val >= max || disabled} />
          </InputAdornment>
        ),
      }}
      disabled={disabled}
      error={error}
      helperText={helperText}
    />
  )
}

export default NumberInput
