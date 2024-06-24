import React, { forwardRef, memo } from 'react'
import FormControl, { FormControlProps } from '@mui/material/FormControl'

export type MDFormControlProps = FormControlProps

const MDFormControl = forwardRef<HTMLDivElement, MDFormControlProps>(({ fullWidth = true, ...props }, ref) => {
  return <FormControl fullWidth={fullWidth} ref={ref} {...props} />
})

export default memo(MDFormControl)
