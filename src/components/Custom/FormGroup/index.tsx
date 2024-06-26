import { forwardRef } from 'react'
import { MuiFormGroup, MuiFormGroupProps } from '../../Mui'

export interface FormGroupProps extends MuiFormGroupProps {}

const FormGroup = forwardRef<HTMLDivElement, FormGroupProps>(({ ...props }: FormGroupProps, ref) => {
  return <MuiFormGroup ref={ref} {...props} />
})

export default FormGroup
