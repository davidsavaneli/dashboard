import { forwardRef } from 'react'
import { MuiCheckbox, MuiCheckboxProps } from '../../Mui'
import FormControlLabel from '../FormControlLabel'

export interface CheckboxProps extends MuiCheckboxProps {
  label?: string
}

const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(({ label, ...props }, ref) => {
  return <FormControlLabel control={<MuiCheckbox ref={ref} {...props} />} label={label} />
})

export default Checkbox
