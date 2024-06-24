import React, { forwardRef, memo } from 'react'
import FormLabel, { FormLabelProps } from '@mui/material/FormLabel'

export type MDFormLabelProps = FormLabelProps

const MDFormLabel = forwardRef<HTMLLabelElement, MDFormLabelProps>(({ ...props }, ref) => {
  return <FormLabel ref={ref} {...props} />
})

export default memo(MDFormLabel)
