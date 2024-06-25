import { forwardRef } from 'react'
import { MuiInputAdornment, MuiInputAdornmentProps } from '../../Mui'

export interface InputAdornmentProps extends MuiInputAdornmentProps {}

const InputAdornment = forwardRef<HTMLDivElement, InputAdornmentProps>(({ ...props }, ref) => {
  return <MuiInputAdornment ref={ref} {...props} />
})

export default InputAdornment
