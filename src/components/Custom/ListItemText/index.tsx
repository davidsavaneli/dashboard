import { forwardRef } from 'react'
import { MuiListItemText, MuiListItemTextProps } from '../../Mui'

export interface ListItemTextProps extends MuiListItemTextProps {}

const ListItemText = forwardRef<HTMLDivElement, ListItemTextProps>(({ ...props }: ListItemTextProps, ref) => {
  return <MuiListItemText ref={ref} {...props} />
})

export default ListItemText
