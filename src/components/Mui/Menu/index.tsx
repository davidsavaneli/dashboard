import MuiMenu, { MenuProps as MuiMenuProps } from '@mui/material/Menu'

export interface MenuProps extends MuiMenuProps {}

export const Menu = ({ ...props }: MenuProps) => {
  return <MuiMenu {...props} />
}
