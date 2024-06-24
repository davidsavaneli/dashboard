import { forwardRef } from 'react'
import { MuiCheckbox, MuiCheckboxProps, MuiFormControlLabel } from '../../Mui'

export type CheckboxProps = MuiCheckboxProps & {
  label?: string
}

const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(({ label, ...props }, ref) => {
  return <MuiFormControlLabel control={<MuiCheckbox ref={ref} {...props} />} label={label} />
})

export default Checkbox
