import MuiCollapse, { CollapseProps as MuiCollapseProps } from '@mui/material/Collapse'

export interface CollapseProps extends MuiCollapseProps {}

export const Collapse = ({ ...props }: CollapseProps) => {
  return <MuiCollapse {...props} />
}
