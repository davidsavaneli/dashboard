import React, { useState, ReactElement, ReactNode, memo, cloneElement, MouseEvent, forwardRef } from 'react'
import Menu from '@mui/material/Menu'
import MDMenuItem from '../MenuItem'

export type MDMenuProps = {
  component: ReactElement
  items: Array<{ children: ReactNode; onClick?: () => void; disableClose?: boolean }>
}

const MDMenu = forwardRef<HTMLDivElement, MDMenuProps>(({ component, items, ...props }: MDMenuProps, ref) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <div>
      {cloneElement(component, { onClick: handleClick })}
      <Menu
        ref={ref}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        {...props}
      >
        {items.map((item, index) => (
          <MDMenuItem
            key={index}
            onClick={() => {
              if (item.onClick) item.onClick()
              if (item.disableClose !== true) handleClose()
            }}
          >
            {item.children}
          </MDMenuItem>
        ))}
      </Menu>
    </div>
  )
})

export default memo(MDMenu)
