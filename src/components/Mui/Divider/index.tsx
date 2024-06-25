import MuiDivider, { DividerProps as MuiDividerProps } from '@mui/material/Divider'

export interface DividerProps extends MuiDividerProps {}

export const Divider = ({ ...props }: DividerProps) => {
  return <MuiDivider {...props} />
}
