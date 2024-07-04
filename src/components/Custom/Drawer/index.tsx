import React, { ReactNode, useState, useEffect } from 'react'
import clsx from 'clsx'
import { IRoutes, IRouteItem } from '../../../router'
import RouterLink from '../RouterLink'
import { Collapse } from '../../Mui/Collapse'
import styles from './styles.module.css'
import Icon from '../Icon'

export type DrawerProps = {
  routes: IRoutes
  openFirstLevel?: boolean
}

const Drawer = ({ routes, openFirstLevel = true }: DrawerProps) => {
  return (
    <div className={styles.drawer}>
      <div className={styles.header}>
        <div className={styles.headerInner}></div>
      </div>
      <div className={styles.drawerItems}>{renderLinks(routes.items, routes, 0, openFirstLevel)}</div>
    </div>
  )
}

export default Drawer

const getDefaultOpenState = (
  routes: IRoutes,
  pathPrefix: string = '',
  openFirstLevel: boolean,
): { [key: string]: boolean } => {
  const openState: { [key: string]: boolean } = {}
  const traverse = (items: IRouteItem[], prefix: string, depth: number) => {
    items.forEach((item) => {
      const fullPath = `${prefix}${item.path}`
      if (item.children && item.children.length > 0) {
        openState[fullPath] =
          openFirstLevel && depth === 0
            ? true
            : item.children.some((child) => window.location.pathname.startsWith(child.path))
        traverse(item.children, '', depth + 1)
      }
    })
  }
  traverse(routes.items, pathPrefix, 0)
  return openState
}

const renderLinks = (items: IRouteItem[], routes: IRoutes, depth: number = 0, openFirstLevel: boolean) => {
  const [open, setOpen] = useState<{ [key: string]: boolean }>(() => getDefaultOpenState(routes, '', openFirstLevel))

  useEffect(() => {
    setOpen(getDefaultOpenState(routes, '', openFirstLevel))
  }, [routes, openFirstLevel])

  const handleClick = (path: string) => {
    setOpen((prev) => ({ ...prev, [path]: !prev[path] }))
  }

  return items.map((item) => (
    <React.Fragment key={item.path}>
      <div
        className={clsx({
          [styles.drawerItem]: true,
          [styles.drawerItemFirstLevel]: depth === 0,
          [styles.drawerItemSecondLevel]: depth === 1,
          [styles.drawerItemThirdLevel]: depth === 2,
          [styles.drawerItemFourthLevel]: depth === 3,
          [styles.drawerItemWithIcon]: item.iconName,
        })}
        onClick={() => handleClick(item.path)}
      >
        {item.iconName && (
          <div className={styles.icon}>
            <Icon name={item.iconName} />
          </div>
        )}
        {item.element === '' ? (
          <>
            {item.name}
            {item.children && item.children.length > 0 && (!openFirstLevel || depth > 0) && (
              <>&nbsp;&nbsp;&nbsp;{open[item.path] ? '-' : '+'}</>
            )}
          </>
        ) : (
          <>
            <RouterLink to={item.path}>{item.name}</RouterLink>
            {item.children && item.children.length > 0 && <>&nbsp;&nbsp;&nbsp;{open[item.path] ? '-' : '+'}</>}
          </>
        )}
      </div>
      {item.children &&
        item.children.length > 0 &&
        (openFirstLevel && depth === 0 ? (
          <div>{renderLinks(item.children, routes, depth + 1, openFirstLevel)}</div>
        ) : (
          <Collapse in={open[item.path]}>
            <div>{renderLinks(item.children, routes, depth + 1, openFirstLevel)}</div>
          </Collapse>
        ))}
    </React.Fragment>
  ))
}
