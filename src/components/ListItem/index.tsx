import MuiListItem, { ListItemProps as MuiListItemProps } from '@mui/material/ListItem'

import './styles.css'

export interface ListItemProps extends MuiListItemProps {}

const ListItem = ({ ...props }: ListItemProps) => {
  return <MuiListItem {...props} />
}

export default ListItem
