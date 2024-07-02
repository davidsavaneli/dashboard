import React, { ReactNode, useState } from 'react'
import { List } from '@mui/material'
import { IRoutes, IRouteItem } from '../../../router'
import RouterLink from '../RouterLink'
import { Collapse } from '../../Mui/Collapse'
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
      <div onClick={() => handleClick(item.path)}>
        {item.icon}
        {item.element === '' ? (
          <>
            {item.name}
            {open[item.path] ? <>Less</> : <>More</>}
          </>
        ) : (
          <RouterLink to={item.path}>{item.name}</RouterLink>
        )}
      </div>
      {item.children && item.children.length > 0 && (
        <Collapse in={open[item.path]}>
          <div>{renderLinks(item.children, routes)}</div>
        </Collapse>
      )}
    </React.Fragment>
  ))
}
