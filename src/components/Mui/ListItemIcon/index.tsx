import MuiListItemIcon, { ListItemIconProps as MuiListItemIconProps } from '@mui/material/ListItemIcon'

export interface ListItemIconProps extends MuiListItemIconProps {}

export const ListItemIcon = ({ ...props }: ListItemIconProps) => {
  return <MuiListItemIcon {...props} />
}
