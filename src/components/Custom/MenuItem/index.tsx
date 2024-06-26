import { forwardRef } from 'react'
import { MuiMenuItem, MuiMenuItemProps } from '../../Mui'

export type MenuItemProps = MuiMenuItemProps

const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(({ ...props }: MenuItemProps, ref) => {
  return <MuiMenuItem ref={ref} {...props} />
})

export default MenuItem
