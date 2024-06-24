import React, { forwardRef, memo } from 'react'
import Switch, { SwitchProps } from '@mui/material/Switch'
import MDFormControl from '../FormControl'
import FormControlLabel from '../FormControlLabel'

export type MDSwitchProps = SwitchProps & {
  label?: string
}

const MDSwitch = forwardRef<HTMLButtonElement, MDSwitchProps>(({ label, ...props }, ref) => {
  return <FormControlLabel control={<Switch ref={ref} {...props} />} label={label} />
})

export default memo(MDSwitch)
