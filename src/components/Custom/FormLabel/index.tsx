import { forwardRef } from 'react'
import { MuiFormLabel, MuiFormLabelProps } from '../../Mui'

export interface FormLabelProps extends MuiFormLabelProps {}

const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(({ ...props }, ref) => {
  return <MuiFormLabel ref={ref} {...props} />
})

export default FormLabel
