import MuiSwitch, { SwitchProps as MuiSwitchProps } from '@mui/material/Switch'

export interface SwitchProps extends MuiSwitchProps {}

export const Switch = ({ ...props }: SwitchProps) => {
  return <MuiSwitch {...props} />
}
