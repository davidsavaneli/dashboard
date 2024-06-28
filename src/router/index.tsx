import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import { IRoutes, IRouteItems } from '../types'

export interface CustomRouterProps {
  routes: IRoutes
}

const CustomRoute = (items: IRouteItems[]) =>
  items.map((route: IRouteItems, index: number) => (
    <React.Fragment key={index}>
      <Route key={route.path} path={route.path} element={route.element} />
      {route?.children?.length
        ? route?.children.map((childRoute: IRouteItems) => (
            <>
              <Route key={childRoute.path} path={childRoute.path} element={childRoute.element} />
              {CustomRoute(childRoute?.children || [])}
            </>
          ))
        : null}
    </React.Fragment>
  ))

const CustomRouter = ({ routes }: CustomRouterProps) => {
  return (
    <Routes>
      <Route key={routes.mainPath} path={routes.mainPath} element={<Outlet />}>
        <Route index element={routes.indexElement} />
        {CustomRoute(routes.items)}
        <Route path='*' element={<>No Match</>} />
      </Route>
    </Routes>
  )
}

export default CustomRouter
