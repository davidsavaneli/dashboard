import React, { useEffect, ReactNode } from 'react'
import { Routes, Route, Outlet, useNavigate } from 'react-router-dom'
import { IconName } from '../components'

export interface IRouteItem {
  name: string
  path: string
  iconName: IconName | ''
  element: ReactNode
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
  items.map((route: IRouteItem) => (
    <React.Fragment key={route.path}>
      <Route key={route.path} path={route.path} element={route.element || <NoMatch />} />
      {route?.children?.length
        ? route.children.map((childRoute: IRouteItem) => (
            <React.Fragment key={childRoute.path}>
              <Route key={childRoute.path} path={childRoute.path} element={childRoute.element || <NoMatch />} />
              {CustomRoute(childRoute?.children || [])}
            </React.Fragment>
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
        <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>
  )
}

export default CustomRouter

const NoMatch = () => {
  const navigate = useNavigate()
  useEffect(() => navigate('/'))

  return <></>
}
