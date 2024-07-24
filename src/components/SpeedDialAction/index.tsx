import { forwardRef } from 'react'
import MuiSpeedDialAction, { SpeedDialActionProps as MuiSpeedDialActionProps } from '@mui/material/SpeedDialAction'
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
            color={FabProps?.color || 'medium'}
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
