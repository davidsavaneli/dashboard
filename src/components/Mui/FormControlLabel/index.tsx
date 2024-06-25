import MuiFormControlLabel, { FormControlLabelProps as MuiFormControlLabelProps } from '@mui/material/FormControlLabel'

export interface FormControlLabelProps extends MuiFormControlLabelProps {}

export const FormControlLabel = ({ ...props }: FormControlLabelProps) => {
  return <MuiFormControlLabel {...props} />
}
