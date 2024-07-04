import { ReactNode, forwardRef, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MuiBreadcrumbs, MuiBreadcrumbsProps } from '../../Mui'
import RouterLink from '../RouterLink'
import { IRoutes } from '../../../router'

export interface IBreadcrumbs {
  label: string
  to: string
  element?: ReactNode
}

export interface BreadcrumbsProps extends MuiBreadcrumbsProps {
  breadcrumbs?: IBreadcrumbs[]
  routes: IRoutes
}

const findRouteByPath = (routes: IRoutes, path: string): IBreadcrumbs[] => {
  const pathSegments = path.split('/').filter((segment) => segment)
  const breadcrumbs: IBreadcrumbs[] = [{ label: 'Dashboard', to: '/', element: true }]

  if (path === '/') return breadcrumbs

  const traverseRoutes = (routeItems: any[], currentPath: string) => {
    for (const route of routeItems) {
      if (currentPath === route.path) {
        breadcrumbs.push({ label: route.name, to: route.path, element: route.element })
      } else if (currentPath.startsWith(`${route.path}/`)) {
        breadcrumbs.push({ label: route.name, to: route.path, element: route.element })
        if (route.children && route.children.length > 0) {
          traverseRoutes(route.children, currentPath)
        }
      }
    }
  }

  traverseRoutes(routes.items, `/${pathSegments.join('/')}`)
  return breadcrumbs
}

const Breadcrumbs = forwardRef<HTMLDivElement, BreadcrumbsProps>(
  ({ routes, separator = '›', ...props }: BreadcrumbsProps, ref) => {
    const location = useLocation()
    const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumbs[]>([])

    useEffect(() => {
      const currentPath = location.pathname
      const newBreadcrumbs = findRouteByPath(routes, currentPath)
      setBreadcrumbs(newBreadcrumbs)
    }, [location, routes])

    if (breadcrumbs.length === 1) {
      return null
    }

    return (
      <MuiBreadcrumbs ref={ref} separator={separator} {...props}>
        {breadcrumbs.map((breadcrumb, index) => {
          const isLast = index === breadcrumbs.length - 1
          return isLast || !breadcrumb.element ? (
            <span key={breadcrumb.to}>{breadcrumb.label}</span>
          ) : (
            <RouterLink key={breadcrumb.to} to={breadcrumb.to}>
              {breadcrumb.label}
            </RouterLink>
          )
        })}
      </MuiBreadcrumbs>
    )
  },
)

export default Breadcrumbs
