import MuiFormControl, { FormControlProps as MuiFormControlProps } from '@mui/material/FormControl'

export interface FormControlProps extends MuiFormControlProps {}

export const FormControl = ({ ...props }: FormControlProps) => {
  return <MuiFormControl {...props} />
}
