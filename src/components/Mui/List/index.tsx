import MuiList, { ListProps as MuiListProps } from '@mui/material/List'

export interface ListProps extends MuiListProps {}

export const List = ({ ...props }: ListProps) => {
  return <MuiList {...props} />
}
