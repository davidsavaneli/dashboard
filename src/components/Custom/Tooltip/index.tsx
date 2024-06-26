import { forwardRef } from 'react'
import { MuiTooltip, MuiTooltipProps } from '../../Mui'

export interface TooltipProps extends MuiTooltipProps {}

const Tooltip = forwardRef<HTMLSpanElement, TooltipProps>(
  ({ arrow = false, placement = 'top', children, ...props }: TooltipProps, ref) => {
    return (
      <MuiTooltip ref={ref} arrow={arrow} placement={placement} {...props}>
        <span style={{ display: 'inline' }}>{children}</span>
      </MuiTooltip>
    )
  },
)

export default Tooltip
