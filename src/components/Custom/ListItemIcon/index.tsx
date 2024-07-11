import { forwardRef } from 'react'
import { MuiListItemIcon, MuiListItemIconProps } from '../../Mui'
import './styles.css'

export interface ListItemIconProps extends MuiListItemIconProps {}

const ListItemIcon = forwardRef<HTMLDivElement, ListItemIconProps>(({ ...props }: ListItemIconProps, ref) => {
  return <MuiListItemIcon ref={ref} {...props} />
})

export default ListItemIcon
