import { useState, forwardRef } from 'react'
import { MuiColorInput, MuiColorInputValue, MuiColorInputFormat } from 'mui-color-input'
import FormLabel from '../FormLabel'

import './styles.css'

export type ColorPickerProps = {
  format?: MuiColorInputFormat
  fallbackValue?: MuiColorInputValue
  value?: MuiColorInputValue
  onChange?: (newValue: string) => void
  label?: string
  disabled?: boolean
}

const ColorPicker = forwardRef<HTMLInputElement, ColorPickerProps>(
  ({ format = 'hex8', fallbackValue, value, onChange, label, disabled = false, ...props }: ColorPickerProps, ref) => {
    const [color, setColor] = useState<MuiColorInputValue>(value || '')

    const handleChange = (newValue: string) => {
      setColor(newValue)
      if (onChange) {
        onChange(newValue)
      }
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {label && <FormLabel>{label}</FormLabel>}
        <MuiColorInput
          ref={ref}
          adornmentPosition={'end'}
          format={format}
          fallbackValue={fallbackValue}
          value={color}
          onChange={handleChange}
          disabled={disabled}
          {...props}
        />
      </div>
    )
  },
)

export default ColorPicker
