import React, { useState, useEffect } from 'react'
import { Select as MuiSelect, MenuItem, SelectChangeEvent, SelectProps as MuiSelectProps } from '@mui/material'
import FormControl from '../FormControl'
import InputLabel from '../InputLabel'

export type MDSelectProps = MuiSelectProps & {
  label?: string
  options: { value: any; label: string }[]
  initialValue?: any
  onValueChange?: (value: any) => void
}

const MDSelect = ({ label, options, initialValue, variant = 'outlined', onValueChange, ...props }: MDSelectProps) => {
  const [value, setValue] = useState(initialValue || (props.multiple ? [] : ''))

  const handleChange = (event: SelectChangeEvent<any>) => {
    const selectedValue = event.target.value
    setValue(selectedValue)
    if (onValueChange) {
      onValueChange(selectedValue)
    }
  }

  useEffect(() => {
    if (initialValue !== undefined) {
      setValue(initialValue)
    }
  }, [initialValue])

  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        value={value}
        variant={variant}
        onChange={handleChange}
        label={label}
        multiple={props.multiple}
        {...props}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  )
}

export default MDSelect
