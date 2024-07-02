import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'

export interface IRouteItem {
  name: string
  path: string
  icon: React.ReactNode
  element: React.ReactNode
  children?: IRouteItem[]
}

export interface IRoutes {
  mainPath: string
  indexElement: React.ReactNode
  items: IRouteItem[]
}

export interface CustomRouterProps {
  routes: IRoutes
}

const CustomRoute = (items: IRouteItem[]) =>
  items.map((route: IRouteItem, index: number) => (
    <React.Fragment key={index}>
      <Route key={route.path} path={route.path} element={route.element} />
      {route?.children?.length
        ? route?.children.map((childRoute: IRouteItem) => (
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
