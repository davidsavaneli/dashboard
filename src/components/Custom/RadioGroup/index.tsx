import { forwardRef } from 'react'
import { MuiRadioGroup, MuiRadioGroupProps } from '../../Mui'

export interface RadioGroupProps extends MuiRadioGroupProps {}

const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(({ ...props }: RadioGroupProps, ref) => {
  return <MuiRadioGroup ref={ref} {...props} />
})

export default RadioGroup
