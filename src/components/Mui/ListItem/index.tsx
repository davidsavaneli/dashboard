import MuiListItem, { ListItemProps as MuiListItemProps } from '@mui/material/ListItem'

export interface ListItemProps extends MuiListItemProps {}

export const ListItem = ({ ...props }: ListItemProps) => {
  return <MuiListItem {...props} />
}
