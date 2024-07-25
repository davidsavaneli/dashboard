import { useState, forwardRef, useEffect } from 'react'
import clsx from 'clsx'
import MuiMenu, { MenuProps as MuiMenuProps } from '@mui/material/Menu'
import MenuItem, { MenuItemProps } from '../MenuItem'
import Divider from '../Divider'

import './styles.css'

type ItemProps = Omit<MenuItemProps, 'component' | 'dense' | 'divider' | 'autoFocus'> & {
  onClick?: () => void
  disableClose?: boolean
  divider?: boolean
}

export type MenuProps = Omit<MuiMenuProps, 'open'> & {
  component: any
  items: Array<ItemProps>
}

const Menu = forwardRef<HTMLDivElement, MenuProps>(
  (
    {
      component,
      items,
      transformOrigin = { horizontal: 'right', vertical: 'top' },
      anchorOrigin = { horizontal: 'right', vertical: 'bottom' },
      ...props
    }: MenuProps,
    ref,
  ) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const [selectedItem, setSelectedItem] = useState<number | null>(null)

    const open = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)
    const handleClose = () => setAnchorEl(null)

    useEffect(() => {
      const defaultSelected = items.findIndex((item) => item.selected)
      defaultSelected !== -1 && setSelectedItem(defaultSelected)
    }, [items])

    return (
      <>
        <div className='MuiMenu-button-wrapper' onClick={handleClick}>
          {component}
        </div>
        <MuiMenu
          ref={ref}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          transformOrigin={transformOrigin}
          anchorOrigin={anchorOrigin}
          {...props}
        >
          {items.map((item, index) => (
            <MenuItem
              key={index}
              className={clsx({
                ['MuiMenuItem-divider']: item.divider,
              })}
              selected={selectedItem === index}
              disabled={item.disabled || item.divider}
              onClick={() => {
                item.onClick && item.onClick()
                item.disableClose !== true && handleClose()
              }}
            >
              {item.children}
              {item.divider && <Divider />}
            </MenuItem>
          ))}
        </MuiMenu>
      </>
    )
  },
)

export default Menu
