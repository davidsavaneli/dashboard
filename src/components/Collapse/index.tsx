import { forwardRef } from 'react'
import MuiCollapse, { CollapseProps as MuiCollapseProps } from '@mui/material/Collapse'

export interface CollapseProps extends MuiCollapseProps {}

const Collapse = forwardRef<HTMLDivElement, CollapseProps>(
  ({ unmountOnExit = true, timeout = 'auto', ...props }: CollapseProps, ref) => {
    return <MuiCollapse ref={ref} unmountOnExit={unmountOnExit} timeout={timeout} {...props} />
  },
)

export default Collapse
