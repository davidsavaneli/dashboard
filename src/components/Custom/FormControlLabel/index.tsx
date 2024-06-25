import { forwardRef } from 'react'
import { MuiFormControlLabel, MuiFormControlLabelProps } from '../../Mui'

export interface FormControlLabelProps extends MuiFormControlLabelProps {}

const FormControlLabel = forwardRef<HTMLLabelElement, FormControlLabelProps>(({ ...props }, ref) => {
  return <MuiFormControlLabel ref={ref} {...props} />
})

export default FormControlLabel
