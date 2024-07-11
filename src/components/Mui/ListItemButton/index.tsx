import MuiListItemButton, { ListItemButtonProps as MuiListItemButtonProps } from '@mui/material/ListItemButton'

export interface ListItemButtonProps extends MuiListItemButtonProps {}

export const ListItemButton = ({ ...props }: ListItemButtonProps) => {
  return <MuiListItemButton {...props} />
}
