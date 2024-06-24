import React, { forwardRef, memo } from 'react'
import InputAdornment, { InputAdornmentProps } from '@mui/material/InputAdornment'

export type MDInputAdornmentProps = InputAdornmentProps

const MDInputAdornment = forwardRef<HTMLDivElement, MDInputAdornmentProps>(({ ...props }, ref) => {
  return <InputAdornment {...props} ref={ref} />
})

export default memo(MDInputAdornment)
