import React, { ReactNode, useState } from 'react'
import { List, ListItem, ListItemText, Collapse, ListItemIcon } from '@mui/material'
import { Link } from 'react-router-dom'
import { IRoutes, IRouteItem } from '../../../router'
import styles from './styles.module.css'

export type DrawerProps = {
  sss?: boolean
  routes: IRoutes
  children?: ReactNode
}

const Drawer = ({ sss = true, routes, children }: DrawerProps) => {
  return (
    <div className={styles.drawer}>
      {renderLinks(routes.items, routes)}
      {children}
    </div>
  )
}

export default Drawer

const getDefaultOpenState = (routes: IRoutes, pathPrefix: string = ''): { [key: string]: boolean } => {
  const openState: { [key: string]: boolean } = {}
  const traverse = (items: IRouteItem[], prefix: string) => {
    items.forEach((item) => {
      const fullPath = `${prefix}${item.path}`
      if (item.children && item.children.length > 0) {
        openState[fullPath] = item.children.some((child) => window.location.pathname.startsWith(child.path))
        traverse(item.children, '')
      }
    })
  }
  traverse(routes.items, pathPrefix)
  return openState
}

const renderLinks = (items: IRouteItem[], routes: IRoutes) => {
  const [open, setOpen] = useState<{ [key: string]: boolean }>(() => getDefaultOpenState(routes))

  const handleClick = (path: string) => {
    setOpen((prev) => ({ ...prev, [path]: !prev[path] }))
  }

  return items.map((item) => (
    <React.Fragment key={item.path}>
      <ListItem button onClick={() => handleClick(item.path)}>
        {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
        {item.element === '' ? (
          <>
            <ListItemText primary={item.name} />
            {open[item.path] ? <>Less</> : <>More</>}
          </>
        ) : (
          <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemText primary={item.name} />
          </Link>
        )}
      </ListItem>
      {item.children && item.children.length > 0 && (
        <Collapse in={open[item.path]} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            {renderLinks(item.children, routes)}
          </List>
        </Collapse>
      )}
    </React.Fragment>
  ))
}

// const DrawerComponent: React.FC<{ routes: IRoutes2 }> = ({ routes }) => {
//   const [open, setOpen] = useState<{ [key: string]: boolean }>(() => getDefaultOpenState(routes))

//   const handleClick = (path: string) => {
//     setOpen((prev) => ({ ...prev, [path]: !prev[path] }))
//   }

//   const renderLinks = (items: RouteItem[]) => {
//     return items.map((item) => (
//       <React.Fragment key={item.path}>
//         <ListItem button onClick={() => handleClick(item.path)}>
//           {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
//           {item.element === '' ? (
//             <>
//               <ListItemText primary={item.name} />
//               {open[item.path] ? <>Less</> : <>More</>}
//             </>
//           ) : (
//             <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
//               <ListItemText primary={item.name} />
//             </Link>
//           )}
//         </ListItem>
//         {item.children && item.children.length > 0 && (
//           <Collapse in={open[item.path]} timeout='auto' unmountOnExit>
//             <List component='div' disablePadding>
//               {renderLinks(item.children)}
//             </List>
//           </Collapse>
//         )}
//       </React.Fragment>
//     ))
//   }

//   return <List>{renderLinks(routes.items)}</List>
// }
