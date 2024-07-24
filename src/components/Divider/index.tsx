import MuiDivider, { DividerProps as MuiDividerProps } from '@mui/material/Divider'

import './styles.css'

export interface DividerProps extends MuiDividerProps {}

const Divider = ({ ...props }: DividerProps) => {
  return <MuiDivider {...props} />
}

export default Divider
