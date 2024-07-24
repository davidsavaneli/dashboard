import { forwardRef } from 'react'
import MuiInputAdornment, { InputAdornmentProps as MuiInputAdornmentProps } from '@mui/material/InputAdornment'

export interface InputAdornmentProps extends MuiInputAdornmentProps {}

const InputAdornment = forwardRef<HTMLDivElement, InputAdornmentProps>(({ ...props }: InputAdornmentProps, ref) => {
  return <MuiInputAdornment ref={ref} {...props} />
})

export default InputAdornment
