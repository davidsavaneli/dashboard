import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { IRoutes, IRouteItem } from '../../router'
import Collapse from '../Collapse'
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
  logo?: string
  logoAltText?: string
}

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

const listItemArrowComponent = (open: boolean) =>
  open ? (
    <div className={styles.arrowIcon}>
      <Icon name='ArrowUp2' size='sm' color='primaryLight' />
    </div>
  ) : (
    <div className={styles.arrowIcon}>
      <Icon name='ArrowDown2' size='sm' color='primaryLight' />
    </div>
  )

const listItemTextComponent = (itemName: string, selected: boolean) => (
  <ListItemText>
    <Text weight={selected ? 'medium' : 'regular'} color={selected ? 'medium' : 'primaryLight'}>
      {itemName}
    </Text>
  </ListItemText>
)

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

  const renderItem = (item: IRouteItem, depth: number, selected: boolean) => (
    <>
      {item.iconName ? (
        <ListItemIcon>
          <Icon variant={selected ? 'Bold' : 'Bulk'} name={item.iconName} color={selected ? 'medium' : 'primary'} />
        </ListItemIcon>
      ) : (
        <div className={clsx(styles.drawerItemDot, selected && styles.drawerItemDotActive)}></div>
      )}
      {item.element === '' ? (
        <>
          {listItemTextComponent(item.name, selected)}
          {item.children &&
            item.children.length > 0 &&
            (!openFirstLevel || depth > 0) &&
            listItemArrowComponent(open[item.path])}
        </>
      ) : (
        <>
          {listItemTextComponent(item.name, selected)}
          {item.children && item.children.length > 0 && listItemArrowComponent(open[item.path])}
        </>
      )}
    </>
  )

  return items.map((item) => (
    <React.Fragment key={item.path}>
      {depth === 0 && !item.element ? (
        <div className={styles.drawerItemCategoryTitle}>
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

const Drawer = ({ routes, openFirstLevel = true, logo, logoAltText = '' }: DrawerProps) => {
  return (
    <div className={styles.drawerContainer}>
      <div className={styles.drawer}>
        <div className={styles.header}>
          <div className={styles.headerLogoBox}>
            <img src={logo} alt={logoAltText} className={styles.headerLogoImg} />
          </div>
        </div>
        <div className={styles.drawerItems}>
          <List>{renderLinks(routes.items, routes, 0, openFirstLevel)}</List>
        </div>
      </div>
    </div>
  )
}

export default Drawer
