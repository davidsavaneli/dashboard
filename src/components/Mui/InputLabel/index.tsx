import MuiInputLabel, { InputLabelProps as MuiInputLabelProps } from '@mui/material/InputLabel'

export interface InputLabelProps extends MuiInputLabelProps {}

export const InputLabel = ({ ...props }) => {
  return <MuiInputLabel {...props} />
}
