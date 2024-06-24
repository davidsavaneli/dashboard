import React, { forwardRef, memo } from 'react'
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox'
import FormControlLabel from '../FormControlLabel'

export type MDCheckboxProps = CheckboxProps & {
  label?: string
}

const MDCheckbox = forwardRef<HTMLButtonElement, MDCheckboxProps>(({ label, ...props }, ref) => {
  return <FormControlLabel control={<Checkbox ref={ref} {...props} />} label={label} />
})

export default memo(MDCheckbox)
