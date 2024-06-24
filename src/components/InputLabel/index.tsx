import React, { forwardRef, memo } from 'react'
import InputLabel, { InputLabelProps } from '@mui/material/InputLabel'

export type MDInputLabelProps = InputLabelProps

const MDInputLabel = forwardRef<HTMLLabelElement, MDInputLabelProps>(({ ...props }, ref) => {
  return <InputLabel ref={ref} {...props} />
})

export default memo(MDInputLabel)
