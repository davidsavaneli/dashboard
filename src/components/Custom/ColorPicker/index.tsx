import React, { memo, useState } from 'react'
import { MuiColorInput, MuiColorInputValue, MuiColorInputFormat } from 'mui-color-input'
import MDFormControl from '../FormControl'

export type MDColorPickerProps = {
  format?: MuiColorInputFormat
  fallbackValue?: MuiColorInputValue
  value?: MuiColorInputValue
  onChange?: (newValue: string) => void
  label?: string
  disabled?: boolean
}

const MDColorPicker = ({
  format = 'hex8',
  fallbackValue,
  value,
  onChange,
  label,
  disabled = false,
  ...props
}: MDColorPickerProps) => {
  const [color, setColor] = useState<MuiColorInputValue>(value || '')

  const handleChange = (newValue: string) => {
    setColor(newValue)
    if (onChange) {
      onChange(newValue)
    }
  }

  return (
    <MDFormControl>
      <MuiColorInput
        adornmentPosition={'end'}
        format={format}
        fallbackValue={fallbackValue}
        value={color}
        onChange={handleChange}
        label={label}
        disabled={disabled}
        {...props}
      />
    </MDFormControl>
  )
}

export default memo(MDColorPicker)
