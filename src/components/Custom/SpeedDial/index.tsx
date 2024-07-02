import { forwardRef } from 'react'
import { MuiSpeedDial, MuiSpeedDialProps } from '../../Mui'

export interface SpeedDialProps extends MuiSpeedDialProps {}

const SpeedDial = forwardRef<HTMLButtonElement, SpeedDialProps>(
  ({ direction = 'up', ...props }: SpeedDialProps, ref) => {
    return <MuiSpeedDial ref={ref} direction={direction} {...props} />
  },
)

export default SpeedDial
