import React, { useState, useEffect, ChangeEvent } from 'react'
import TextField, { TextFieldProps } from '../TextField'
import IconButton from '../IconButton'
import InputAdornment from '../InputAdornment'
import TranslationText from '../TranslationText'

export type NumberInputProps = TextFieldProps & {
  value?: number
  min?: number
  max?: number
  onChange?: (value: number) => void
}

const NumberInput: React.FC<NumberInputProps> = ({ value = 0, min = 0, max = 999999, onChange, ...props }) => {
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
      value={val}
      onChange={handleChange}
      inputProps={{ min, max, step: 1 }}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton
              iconName='Minus'
              onClick={decreaseValue}
              variant='filled'
              disabled={val <= min || props.disabled}
              tooltipTitle={<TranslationText text='decrease' />}
            />
            &nbsp;
            <IconButton
              iconName='Add'
              onClick={increaseValue}
              variant='filled'
              disabled={val >= max || props.disabled}
              tooltipTitle={<TranslationText text='increase' />}
            />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  )
}

export default NumberInput
