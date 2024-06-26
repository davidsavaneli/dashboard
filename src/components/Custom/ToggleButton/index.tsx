import { forwardRef } from 'react'
import { MuiToggleButton, MuiToggleButtonProps } from '../../Mui'

export interface ToggleButtonProps extends MuiToggleButtonProps {}

const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps>(({ ...props }: ToggleButtonProps, ref) => {
  return <MuiToggleButton ref={ref} {...props} />
})

export default ToggleButton
