import { MuiListItem, MuiListItemProps } from '../../Mui'

export interface ListItemProps extends MuiListItemProps {}

const ListItem = ({ ...props }: ListItemProps) => {
  return <MuiListItem {...props} />
}

export default ListItem
