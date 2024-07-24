import { useState, ReactNode, forwardRef } from 'react'
import MuiMenu, { MenuProps as MuiMenuProps } from '@mui/material/Menu'
import MenuItem from '../MenuItem'

import './styles.css'

export type MenuProps = Omit<MuiMenuProps, 'open'> & {
  component: any
  items: Array<{ children: ReactNode; onClick?: () => void; disableClose?: boolean }>
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
    const open = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget)
    }
    const handleClose = () => setAnchorEl(null)

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
              onClick={() => {
                if (item.onClick) item.onClick()
                if (item.disableClose !== true) handleClose()
              }}
            >
              {item.children}
            </MenuItem>
          ))}
        </MuiMenu>
      </>
    )
  },
)

export default Menu
