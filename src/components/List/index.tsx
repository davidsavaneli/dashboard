import MuiList, { ListProps as MuiListProps } from '@mui/material/List'

import './styles.css'

export interface ListProps extends MuiListProps {}

const List = ({ ...props }: ListProps) => {
  return <MuiList {...props} />
}

export default List
