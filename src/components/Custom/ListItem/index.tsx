import { MuiListItem, MuiListItemProps } from '../../Mui'
import './styles.css'

export interface ListItemProps extends MuiListItemProps {}

const ListItem = ({ ...props }: ListItemProps) => {
  return <MuiListItem {...props} />
}

export default ListItem
