import { forwardRef } from 'react'
import { MuiSpeedDialAction, MuiSpeedDialActionProps } from '../../Mui'
import Fab, { FabProps } from '../Fab'

export interface SpeedDialActionProps extends MuiSpeedDialActionProps {
  FabProps?: FabProps
}

const SpeedDialAction = forwardRef<HTMLButtonElement, SpeedDialActionProps>(
  ({ FabProps, ...props }: SpeedDialActionProps, ref) => {
    return (
      <MuiSpeedDialAction
        ref={ref}
        icon={
          <Fab
            size={FabProps?.size || 'sm'}
            color={FabProps?.color || 'primary'}
            iconName={FabProps?.iconName || 'More'}
            {...FabProps}
          />
        }
        {...props}
      />
    )
  },
)

export default SpeedDialAction
