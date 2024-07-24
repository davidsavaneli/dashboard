import { forwardRef } from 'react'
import MuiFormGroup, { FormGroupProps as MuiFormGroupProps } from '@mui/material/FormGroup'

export interface FormGroupProps extends MuiFormGroupProps {}

const FormGroup = forwardRef<HTMLDivElement, FormGroupProps>(({ ...props }: FormGroupProps, ref) => {
  return <MuiFormGroup ref={ref} {...props} />
})

export default FormGroup
