import { forwardRef } from 'react'
import { MuiToggleButtonGroup, MuiToggleButtonGroupProps } from '../../Mui'

export interface ToggleButtonGroupProps extends MuiToggleButtonGroupProps {}

const ToggleButtonGroup = forwardRef<HTMLDivElement, ToggleButtonGroupProps>(
  ({ ...props }: ToggleButtonGroupProps, ref) => {
    return <MuiToggleButtonGroup ref={ref} {...props} />
  },
)

export default ToggleButtonGroup
