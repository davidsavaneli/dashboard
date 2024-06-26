import MuiToggleButtonGroup, {
  ToggleButtonGroupProps as MuiToggleButtonGroupProps,
} from '@mui/material/ToggleButtonGroup'

export interface ToggleButtonGroupProps extends MuiToggleButtonGroupProps {}

export const ToggleButtonGroup = ({ ...props }: ToggleButtonGroupProps) => {
  return <MuiToggleButtonGroup {...props} />
}
