import MuiToggleButton, { ToggleButtonProps as MuiToggleButtonProps } from '@mui/material/ToggleButton'

export interface ToggleButtonProps extends MuiToggleButtonProps {}

export const ToggleButton = ({ ...props }: ToggleButtonProps) => {
  return <MuiToggleButton {...props} />
}
