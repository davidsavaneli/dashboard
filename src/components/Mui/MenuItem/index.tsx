import MuiMenuItem, { MenuItemProps as MuiMenuItemProps } from '@mui/material/MenuItem'

export interface MenuItemProps extends MuiMenuItemProps {}

export const MenuItem = ({ ...props }) => {
  return <MuiMenuItem {...props} />
}
