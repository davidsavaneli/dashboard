import { forwardRef } from 'react'
import InputLabel, { InputLabelProps } from '@mui/material/InputLabel'

export type MDInputLabelProps = InputLabelProps

const MDInputLabel = forwardRef<HTMLLabelElement, MDInputLabelProps>(({ ...props }: MDInputLabelProps, ref) => {
  return <InputLabel ref={ref} {...props} />
})

export default MDInputLabel
