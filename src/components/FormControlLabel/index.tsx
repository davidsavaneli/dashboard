import React, { forwardRef, memo } from 'react'
import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel'

export type MDFormControlLabelProps = FormControlLabelProps

const MDFormControlLabel = forwardRef<HTMLLabelElement, MDFormControlLabelProps>(({ ...props }, ref) => {
  return <FormControlLabel ref={ref} {...props} />
})

export default memo(MDFormControlLabel)
