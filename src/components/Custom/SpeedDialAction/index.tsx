import { forwardRef } from 'react'
import { MuiSpeedDialAction, MuiSpeedDialActionProps } from '../../Mui'

export interface SpeedDialActionProps extends MuiSpeedDialActionProps {}

const SpeedDialAction = forwardRef<HTMLButtonElement, SpeedDialActionProps>(
  ({ ...props }: SpeedDialActionProps, ref) => {
    return <MuiSpeedDialAction ref={ref} {...props} />
  },
)

export default SpeedDialAction
