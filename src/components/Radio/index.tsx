import React, { forwardRef, memo } from 'react'
import Radio, { RadioProps } from '@mui/material/Radio'
import FormControlLabel from '../FormControlLabel'

export type MDRadioProps = RadioProps & {
  label?: string
}

const MDRadio = forwardRef<HTMLButtonElement, MDRadioProps>(({ label, ...props }, ref) => {
  return <FormControlLabel control={<Radio ref={ref} {...props} />} label={label} />
})

export default memo(MDRadio)
