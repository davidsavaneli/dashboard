import { forwardRef } from 'react'
import MuiListItemText, { ListItemTextProps as MuiListItemTextProps } from '@mui/material/ListItemText'

export interface ListItemTextProps extends MuiListItemTextProps {}

const ListItemText = forwardRef<HTMLDivElement, ListItemTextProps>(({ ...props }: ListItemTextProps, ref) => {
  return <MuiListItemText ref={ref} {...props} />
})

export default ListItemText
