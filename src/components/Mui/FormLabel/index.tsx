import MuiFormLabel, { FormLabelProps as MuiFormLabelProps } from '@mui/material/FormLabel'

export interface FormLabelProps extends MuiFormLabelProps {}

export const FormLabel = ({ ...props }) => {
  return <MuiFormLabel {...props} />
}
