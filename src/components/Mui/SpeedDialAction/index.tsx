import MuiSpeedDialAction, { SpeedDialActionProps as MuiSpeedDialActionProps } from '@mui/material/SpeedDialAction'

export interface SpeedDialActionProps extends MuiSpeedDialActionProps {}

export const SpeedDialAction = ({ ...props }: SpeedDialActionProps) => {
  return <MuiSpeedDialAction {...props} />
}
