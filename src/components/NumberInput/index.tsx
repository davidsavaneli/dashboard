import { ChangeEvent, useState, forwardRef } from 'react'
import IconButton from '../IconButton'
import TextField from '../TextField'
import InputAdornment from '../InputAdornment'

const isWholeNumber = (num: number): boolean => {
  return num % 1 === 0
}

export interface NumberInputProps {
  label?: string
  disabled?: boolean
  value: number
  max: number
  min?: number
  onValueChange?: (val: number) => void
  error?: boolean
  helperText?: string
}

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    { label, disabled = false, value = 0, onValueChange, min = 0, max = 0, error, helperText }: NumberInputProps,
    ref,
  ) => {
    if (min > max) {
      throw new Error('min must be less than max')
    }

    const [localValue, setLocalValue] = useState<number | undefined>(
      value !== undefined ? Math.max(min, Math.min(max, value)) : undefined,
    )
    const isMax = localValue === max
    const isMin = localValue === min

    const updateState = (val: number) => {
      setLocalValue(val)
      onValueChange && onValueChange(val)
    }

    const handleQtyInc = () => {
      if (localValue === undefined) updateState(min)
      else if (localValue < max) updateState(localValue + 1)
    }

    const handleQtyDec = () => {
      if (localValue === undefined) updateState(min)
      else if (localValue > min) updateState(localValue - 1)
    }

    const handleQtyChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.valueAsNumber

      if (!value) {
        return setLocalValue(undefined)
      } else if (!isWholeNumber(value)) {
        return
      } else if (value > max) {
        return updateState(max)
      } else if (value < min) {
        return updateState(min)
      }

      updateState(value)
    }

    return (
      <TextField
        ref={ref}
        className='MuiTextField-withIcon'
        label={label}
        value={localValue}
        type='number'
        onChange={handleQtyChange}
        disabled={disabled}
        InputProps={{
          [`endAdornment`]: (
            <InputAdornment position='end'>
              <IconButton iconName='Minus' onClick={handleQtyDec} variant='filled' disabled={isMin || disabled} />
              &nbsp;
              <IconButton iconName='Add' onClick={handleQtyInc} variant='filled' disabled={isMax || disabled} />
            </InputAdornment>
          ),
        }}
        error={error}
        helperText={helperText}
      />
    )
  },
)

export default NumberInput
