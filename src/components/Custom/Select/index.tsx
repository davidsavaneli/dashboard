import { useState, useEffect } from 'react'
import { MuiSelect, MuiSelectProps, MuiSelectChangeEvent } from '../../Mui'
import MenuItem from '../MenuItem'
import FormControl from '../FormControl'
import IconButton from '../IconButton'
import FormLabel from '../FormLabel'
import FormHelperText from '../FormHelperText'

import './styles.css'

export type SelectProps = MuiSelectProps & {
  label?: string
  helperText?: string
  options: { value: any; label: string }[]
  initialValue?: any
  onValueChange?: (value: any) => void
}

const Select = ({
  label,
  helperText,
  options,
  initialValue,
  variant = 'outlined',
  onValueChange,
  ...props
}: SelectProps) => {
  const [value, setValue] = useState(initialValue || (props.multiple ? [] : ''))
  const [open, setOpen] = useState(false)

  const handleChange = (event: MuiSelectChangeEvent<any>) => {
    const selectedValue = event.target.value
    setValue(selectedValue)
    onValueChange && onValueChange(selectedValue)
  }

  useEffect(() => {
    initialValue !== undefined && setValue(initialValue)
  }, [initialValue])

  const ArrowIcon = () => (
    <IconButton iconName={open ? 'ArrowUp2' : 'ArrowDown2'} disabled={props.disabled} onClick={() => setOpen(true)} />
  )

  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      <MuiSelect
        className='MuiSelectBase-root MuiTextField-withIcon'
        value={value}
        variant={variant}
        onChange={handleChange}
        label={label}
        multiple={props.multiple}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        IconComponent={() => <ArrowIcon />}
        {...props}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
      {helperText && <FormHelperText error={props.error}>{helperText}</FormHelperText>}
    </FormControl>
  )
}

export default Select
