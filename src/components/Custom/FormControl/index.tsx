import { forwardRef } from 'react'
import { MuiFormControl, MuiFormControlProps } from '../../Mui'

export interface FormControlProps extends MuiFormControlProps {}

const FormControl = forwardRef<HTMLDivElement, FormControlProps>(({ fullWidth = true, ...props }, ref) => {
  return <MuiFormControl ref={ref} fullWidth={fullWidth} {...props} />
})

export default FormControl
