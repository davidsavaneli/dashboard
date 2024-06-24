import React, { forwardRef, memo } from 'react'
import RadioGroup, { RadioGroupProps } from '@mui/material/RadioGroup'

export type MDRadioGroupProps = RadioGroupProps

const MDRadioGroup = forwardRef<HTMLDivElement, MDRadioGroupProps>(({ ...props }, ref) => {
  return <RadioGroup ref={ref} {...props} />
})

export default memo(MDRadioGroup)
