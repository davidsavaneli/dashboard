import { forwardRef } from 'react'
import MuiMenuItem, { MenuItemProps as MuiMenuItemProps } from '@mui/material/MenuItem'

import './styles.css'

export type MenuItemProps = MuiMenuItemProps

const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(({ ...props }: MenuItemProps, ref) => {
  return <MuiMenuItem ref={ref} {...props} />
})

export default MenuItem
