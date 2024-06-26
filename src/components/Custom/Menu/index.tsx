import { useState, ReactNode, cloneElement, MouseEvent, forwardRef } from 'react'
import { MuiMenu, MuiMenuProps } from '../../Mui'
import MenuItem from '../MenuItem'

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

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget)
    const handleClose = () => setAnchorEl(null)

    return (
      <div>
        {cloneElement(component, { onClick: handleClick })}
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
      </div>
    )
  },
)

export default Menu
