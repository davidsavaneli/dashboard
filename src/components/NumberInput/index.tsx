import { ChangeEvent, useState, forwardRef } from 'react'

const isWholeNumber = (num: number): boolean => {
  return num % 1 === 0
}

export interface NumberInputProps {
  disabled?: boolean
  value: number
  max: number
  min?: number
  onValueChange: (val: number) => void
}

interface QtyButtonProps {
  disabled: boolean
  icon: string
  onClick: () => void
}

const QtyButton = ({ disabled, icon, onClick }: QtyButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {icon}
    </button>
  )
}

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  ({ disabled = false, value = 0, onValueChange, min = 0, max = 0 }: NumberInputProps, ref) => {
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
      onValueChange(val)
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

    const onFocus = (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.target.valueAsNumber) e.target.value = ''
    }

    const onBlur = (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.target.value) {
        updateState(min)
        if (min === 0) e.target.valueAsNumber = 0
      }
    }

    return (
      <div>
        <QtyButton icon='-' onClick={handleQtyDec} disabled={isMin} />
        <input
          ref={ref}
          value={localValue}
          type='number'
          onChange={handleQtyChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <QtyButton icon='+' onClick={handleQtyInc} disabled={isMax} />
      </div>
    )
  },
)

export default NumberInput
