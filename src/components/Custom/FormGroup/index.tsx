import React, { forwardRef, memo } from 'react'
import FormGroup, { FormGroupProps } from '@mui/material/FormGroup'

export type MDFormGroupProps = FormGroupProps

const MDFormGroup = forwardRef<HTMLDivElement, MDFormGroupProps>(({ ...props }, ref) => {
  return <FormGroup ref={ref} {...props} />
})

export default memo(MDFormGroup)
