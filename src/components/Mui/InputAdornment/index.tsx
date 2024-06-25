import MuiInputAdornment, { InputAdornmentProps as MuiInputAdornmentProps } from '@mui/material/InputAdornment'

export interface InputAdornmentProps extends MuiInputAdornmentProps {}

export const InputAdornment = ({ ...props }: InputAdornmentProps) => {
  return <MuiInputAdornment {...props} />
}
