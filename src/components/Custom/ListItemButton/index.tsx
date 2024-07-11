import { forwardRef } from 'react'
import { MuiListItemButton, MuiListItemButtonProps } from '../../Mui'

export interface ListItemButtonProps extends MuiListItemButtonProps {}

const ListItemButton = forwardRef<HTMLDivElement, ListItemButtonProps>(({ ...props }: ListItemButtonProps, ref) => {
  return <MuiListItemButton ref={ref} {...props} />
})

export default ListItemButton
