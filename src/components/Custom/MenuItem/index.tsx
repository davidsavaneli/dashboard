import React, { forwardRef, memo } from 'react'
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem'

export type MDMenuItemProps = MenuItemProps

const MDMenuItem = forwardRef<HTMLLIElement, MDMenuItemProps>(({ ...props }, ref) => {
  return <MenuItem ref={ref} {...props} />
})

export default memo(MDMenuItem)
