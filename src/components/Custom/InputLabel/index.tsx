import { forwardRef } from 'react'
import { MuiInputLabel, MuiInputLabelProps } from '../../Mui'

export interface InputLabelProps extends MuiInputLabelProps {}

const InputLabel = forwardRef<HTMLLabelElement, InputLabelProps>(({ ...props }: InputLabelProps, ref) => {
  return <MuiInputLabel ref={ref} {...props} />
})

export default InputLabel
