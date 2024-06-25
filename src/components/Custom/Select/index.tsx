import { useState, useEffect, forwardRef } from 'react'
import { MuiSelect, MuiSelectProps, MuiSelectChangeEvent } from '../../Mui'
import MenuItem from '../MenuItem'
import FormControl from '../FormControl'
import InputLabel from '../InputLabel'

export type SelectProps = MuiSelectProps & {
  label?: string
  options: { value: any; label: string }[]
  initialValue?: any
  onValueChange?: (value: any) => void
}

const Select = forwardRef<HTMLInputElement, SelectProps>(
  ({ label, options, initialValue, variant = 'outlined', onValueChange, ...props }: SelectProps, ref) => {
    const [value, setValue] = useState(initialValue || (props.multiple ? [] : ''))

    const handleChange = (event: MuiSelectChangeEvent<any>) => {
      const selectedValue = event.target.value
      setValue(selectedValue)
      onValueChange && onValueChange(selectedValue)
    }

    useEffect(() => {
      initialValue !== undefined && setValue(initialValue)
    }, [initialValue])

    return (
      <FormControl>
        <InputLabel>{label}</InputLabel>
        <MuiSelect
          ref={ref}
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
  },
)

export default Select
