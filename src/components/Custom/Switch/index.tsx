import { forwardRef } from 'react'
import { MuiSwitch, MuiSwitchProps } from '../../Mui'
import FormControlLabel from '../FormControlLabel'

export interface SwitchProps extends MuiSwitchProps {
  label?: string
}

const Radio = forwardRef<HTMLButtonElement, SwitchProps>(({ label, ...props }, ref) => {
  return <FormControlLabel control={<MuiSwitch ref={ref} {...props} />} label={label} />
})

export default Radio
