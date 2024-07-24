import { forwardRef } from 'react'
import MuiListItemIcon, { ListItemIconProps as MuiListItemIconProps } from '@mui/material/ListItemIcon'

import './styles.css'

export interface ListItemIconProps extends MuiListItemIconProps {}

const ListItemIcon = forwardRef<HTMLDivElement, ListItemIconProps>(({ ...props }: ListItemIconProps, ref) => {
  return <MuiListItemIcon ref={ref} {...props} />
})

export default ListItemIcon
