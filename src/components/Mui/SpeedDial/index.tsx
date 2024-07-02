import MuiSpeedDial, { SpeedDialProps as MuiSpeedDialProps } from '@mui/material/SpeedDial'

export interface SpeedDialProps extends MuiSpeedDialProps {}

export const SpeedDial = ({ ...props }: SpeedDialProps) => {
  return <MuiSpeedDial {...props} />
}
