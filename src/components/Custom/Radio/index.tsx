import { forwardRef } from 'react'
import { MuiRadio, MuiRadioProps } from '../../Mui'
import FormControlLabel from '../FormControlLabel'

export interface RadioProps extends MuiRadioProps {
  label?: string
}

const Radio = forwardRef<HTMLButtonElement, RadioProps>(({ label, ...props }: RadioProps, ref) => {
  return <FormControlLabel control={<MuiRadio ref={ref} {...props} />} label={label} />
})

export default Radio
