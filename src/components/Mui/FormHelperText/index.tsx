import MuiFormHelperText, { FormHelperTextProps as MuiFormHelperTextProps } from '@mui/material/FormHelperText'

export interface FormHelperTextProps extends MuiFormHelperTextProps {}

export const FormHelperText = ({ ...props }) => {
  return <MuiFormHelperText {...props} />
}
