import { forwardRef } from 'react'
import { MuiFormLabel, MuiFormLabelProps } from '../../Mui'

export type FormLabelProps = MuiFormLabelProps

const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(({ ...props }, ref) => {
  return <MuiFormLabel ref={ref} {...props} />
})

export default FormLabel
