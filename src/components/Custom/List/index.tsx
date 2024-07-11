import { MuiList, MuiListProps } from '../../Mui'
import './styles.css'

export interface ListProps extends MuiListProps {}

const List = ({ ...props }: ListProps) => {
  return <MuiList {...props} />
}

export default List
