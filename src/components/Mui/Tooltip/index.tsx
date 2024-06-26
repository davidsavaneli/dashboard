import MuiTooltip, { TooltipProps as MuiTooltipProps } from '@mui/material/Tooltip'

export interface TooltipProps extends MuiTooltipProps {}

export const Tooltip = ({ ...props }: TooltipProps) => {
  return <MuiTooltip {...props} />
}
