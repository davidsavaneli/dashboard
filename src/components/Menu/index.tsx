import React from 'react'
import { useState, forwardRef, useEffect } from 'react'
import clsx from 'clsx'
import MuiMenu, { MenuProps as MuiMenuProps } from '@mui/material/Menu'
import MenuItem, { MenuItemProps } from '../MenuItem'
import Divider from '../Divider'
import ListItem from '../ListItem'

import './styles.css'

type ItemProps = Omit<MenuItemProps, 'component' | 'dense' | 'divider' | 'autoFocus'> & {
  onClick?: () => void
  disableClose?: boolean
  nonClickable?: boolean
  divider?: boolean
}

export type MenuProps = Omit<MuiMenuProps, 'open'> & {
  size?: 'sm' | 'md' | 'lg'
  component: any
  items: Array<ItemProps>
}

const Menu = forwardRef<HTMLDivElement, MenuProps>(
  (
    {
      component,
      items,
      size = 'sm',
      transformOrigin = { horizontal: 'right', vertical: 'top' },
      anchorOrigin = { horizontal: 'right', vertical: 'bottom' },
      ...props
    }: MenuProps,
    ref,
  ) => {
    const classNames = clsx({
      ['MuiMenu-sizeSm']: size === 'sm',
      ['MuiMenu-sizeMd']: size === 'md',
      ['MuiMenu-sizeLg']: size === 'lg',
    })

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
          className={classNames}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          transformOrigin={transformOrigin}
          anchorOrigin={anchorOrigin}
          {...props}
        >
          {items.map((item, index) =>
            React.isValidElement(item.children) && item.children.type === ListItem && item.nonClickable ? (
              item.children
            ) : (
              <MenuItem
                key={index}
                className={clsx({
                  ['MuiMenuItem-divider']: item.divider,
                  ['MuiMenuItem-listItem']: React.isValidElement(item.children) && item.children.type === ListItem,
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
            ),
          )}
        </MuiMenu>
      </>
    )
  },
)

export default Menu
