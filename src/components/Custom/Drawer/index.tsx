import React, { ReactNode, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { IRoutes, IRouteItem } from '../../../router'
import RouterLink from '../RouterLink'
import { Collapse } from '../../Mui/Collapse'
import Icon from '../Icon'
import Title from '../Title'
import Text from '../Text'
import List from '../List'
import ListItemButton, { ListItemButtonProps } from '../ListItemButton'
import ListItemIcon from '../ListItemIcon'
import ListItemText from '../ListItemText'
import styles from './styles.module.css'

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
      <div className={styles.drawerItems}>
        <List>{renderLinks(routes.items, routes, 0, openFirstLevel)}</List>
      </div>
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
  const navigate = useNavigate()

  const [open, setOpen] = useState<{ [key: string]: boolean }>(() => getDefaultOpenState(routes, '', openFirstLevel))

  useEffect(() => {
    setOpen(getDefaultOpenState(routes, '', openFirstLevel))
  }, [routes, openFirstLevel])

  const handleClick = (item: IRouteItem) => {
    setOpen((prev) => ({ ...prev, [item.path]: !prev[item.path] }))
    item.element && navigate(item.path)
  }

  const getListItemButtonSizes = (depth: number): ListItemButtonProps['size'] => {
    switch (depth) {
      case 0:
      case 1:
        return 'lg'
      default:
        return 'sm'
    }
  }

  const isSelected = (path: string) => {
    return window.location.pathname === path
  }

  const renderItem = (item: IRouteItem, depth: number, selected: boolean) => (
    <>
      {item.iconName ? (
        <ListItemIcon>
          <Icon variant='Bulk' name={item.iconName} color={selected ? 'medium' : 'primary'} />
        </ListItemIcon>
      ) : (
        <div
          className={clsx(styles.drawerItemDot, {
            [styles.drawerItemDotActive]: selected,
          })}
        ></div>
      )}
      {item.element === '' ? (
        <>
          <ListItemText>
            <Text color={selected ? 'medium' : 'primaryLight'}>{item.name}</Text>
          </ListItemText>
          {item.children && item.children.length > 0 && (!openFirstLevel || depth > 0) && (
            <>{open[item.path] ? <Icon name='ArrowUp2' size='sm' /> : <Icon name='ArrowDown2' size='sm' />}</>
          )}
        </>
      ) : (
        <>
          <ListItemText>
            <Text color={selected ? 'medium' : 'primaryLight'}>{item.name}</Text>
          </ListItemText>
          {item.children && item.children.length > 0 && (
            <>{open[item.path] ? <Icon name='ArrowUp2' size='sm' /> : <Icon name='ArrowDown2' size='sm' />}</>
          )}
        </>
      )}
    </>
  )

  return items.map((item) => (
    <React.Fragment key={item.path}>
      {depth === 0 && !item.element ? (
        <div className={styles.drawerItemTitle}>
          <Title variant='h6' uppercase>
            {item.name}
          </Title>
        </div>
      ) : (
        <div>
          <ListItemButton
            size={getListItemButtonSizes(depth)}
            className={clsx({
              [styles.drawerItem]: true,
              [styles.drawerItemFirstLevel]: depth === 0,
              [styles.drawerItemSecondLevel]: depth === 1,
              [styles.drawerItemThirdLevel]: depth === 2,
              [styles.drawerItemFourthLevel]: depth === 3,
            })}
            onClick={() => handleClick(item)}
            selected={isSelected(item.path)}
          >
            {renderItem(item, depth, isSelected(item.path))}
          </ListItemButton>
        </div>
      )}

      {item.children &&
        item.children.length > 0 &&
        (openFirstLevel && depth === 0 ? (
          <List>{renderLinks(item.children, routes, depth + 1, openFirstLevel)}</List>
        ) : (
          <Collapse in={open[item.path]}>
            <List>{renderLinks(item.children, routes, depth + 1, openFirstLevel)}</List>
          </Collapse>
        ))}
    </React.Fragment>
  ))
}
