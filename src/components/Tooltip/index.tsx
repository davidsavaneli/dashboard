import { forwardRef } from 'react'
import MuiTooltip, { TooltipProps as MuiTooltipProps } from '@mui/material/Tooltip'

export interface TooltipProps extends MuiTooltipProps {}

const Tooltip = forwardRef<HTMLSpanElement, TooltipProps>(
  ({ arrow = false, placement = 'bottom', children, ...props }: TooltipProps, ref) => {
    return (
      <MuiTooltip ref={ref} arrow={arrow} placement={placement} {...props}>
        <span style={{ display: 'inline-flex' }}>{children}</span>
      </MuiTooltip>
    )
  },
)

export default Tooltip
