import { forwardRef } from 'react'
import { MuiRadio, MuiRadioProps, MuiFormControlLabel } from '../../Mui'

export interface RadioProps extends MuiRadioProps {
  label?: string
}

const Radio = forwardRef<HTMLButtonElement, RadioProps>(({ label, ...props }, ref) => {
  return <MuiFormControlLabel control={<MuiRadio ref={ref} {...props} />} label={label} />
})

export default Radio
