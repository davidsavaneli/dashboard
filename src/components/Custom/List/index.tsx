import { MuiList, MuiListProps } from '../../Mui'

export interface ListProps extends MuiListProps {}

const List = ({ ...props }: ListProps) => {
  return <MuiList {...props} />
}

export default List
