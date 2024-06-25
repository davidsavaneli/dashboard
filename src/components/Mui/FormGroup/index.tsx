import MuiFormGroup, { FormGroupProps as MuiFormGroupProps } from '@mui/material/FormGroup'

export interface FormGroupProps extends MuiFormGroupProps {}

export const FormGroup = ({ ...props }: FormGroupProps) => {
  return <MuiFormGroup {...props} />
}
