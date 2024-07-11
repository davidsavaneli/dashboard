import MuiCollapse, { CollapseProps as MuiCollapseProps } from '@mui/material/Collapse'

export interface CollapseProps extends MuiCollapseProps {}

export const Collapse = ({ unmountOnExit = true, timeout = 'auto', ...props }: CollapseProps) => {
  return <MuiCollapse {...props} unmountOnExit={unmountOnExit} timeout={timeout} />
}
