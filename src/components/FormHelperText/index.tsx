import MuiFormHelperText, { FormHelperTextProps as MuiFormHelperTextProps } from '@mui/material/FormHelperText'

import './styles.css'

export interface FormHelperTextProps extends MuiFormHelperTextProps {}

const FormHelperText = ({ ...props }: FormHelperTextProps) => {
  return <MuiFormHelperText {...props} />
}

export default FormHelperText
