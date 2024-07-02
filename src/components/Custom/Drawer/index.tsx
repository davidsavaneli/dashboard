import React, { ReactNode, useState } from 'react';
import clsx from 'clsx';
import { IRoutes, IRouteItem } from '../../../router';
import RouterLink from '../RouterLink';
import { Collapse } from '../../Mui/Collapse';
import styles from './styles.module.css';

export type DrawerProps = {
  sss?: boolean;
  routes: IRoutes;
};

const Drawer = ({ sss = true, routes }: DrawerProps) => {
  return (
    <div className={styles.drawer}>
      <div className={styles.header}><div className={styles.headerInner}></div></div>
      <div className={styles.drawerItems}>{renderLinks(routes.items, routes)}</div>
    </div>
  );
};

export default Drawer;

const getDefaultOpenState = (routes: IRoutes, pathPrefix: string = ''): { [key: string]: boolean } => {
  const openState: { [key: string]: boolean } = {};
  const traverse = (items: IRouteItem[], prefix: string) => {
    items.forEach((item) => {
      const fullPath = `${prefix}${item.path}`;
      if (item.children && item.children.length > 0) {
        openState[fullPath] = item.children.some((child) => window.location.pathname.startsWith(child.path));
        traverse(item.children, '');
      }
    });
  };
  traverse(routes.items, pathPrefix);
  return openState;
};

const renderLinks = (items: IRouteItem[], routes: IRoutes, depth: number = 0) => {
  const [open, setOpen] = useState<{ [key: string]: boolean }>(() => getDefaultOpenState(routes));

  const handleClick = (path: string) => {
    setOpen((prev) => ({ ...prev, [path]: !prev[path] }));
  };

  return items.map((item, index) => (
    <React.Fragment key={item.path}>
      <div
        className={clsx({
          [styles.drawerItem]: true,
          [styles.drawerItemFirstLevel]: depth === 0,
          [styles.drawerItemSecondLevel]: depth === 1,
          [styles.drawerItemThirdLevel]: depth === 2,
          [styles.drawerItemFourthLevel]: depth === 3,
        })}
        onClick={() => handleClick(item.path)}
      >
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
          <div>{renderLinks(item.children, routes, depth + 1)}</div>
        </Collapse>
      )}
    </React.Fragment>
  ));
};
