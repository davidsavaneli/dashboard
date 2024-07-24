import { forwardRef } from 'react'
import MuiInputLabel, { InputLabelProps as MuiInputLabelProps } from '@mui/material/InputLabel'

export interface InputLabelProps extends MuiInputLabelProps {}

const InputLabel = forwardRef<HTMLLabelElement, InputLabelProps>(({ ...props }: InputLabelProps, ref) => {
  return <MuiInputLabel ref={ref} {...props} />
})

export default InputLabel
