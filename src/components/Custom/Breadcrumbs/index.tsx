import { forwardRef } from 'react'
import { MuiBreadcrumbs, MuiBreadcrumbsProps } from '../../Mui'
import RouterLink from '../RouterLink'

export interface IBreadcrumbs {
  label: string
  to: string
}

export interface BreadcrumbsProps extends MuiBreadcrumbsProps {
  breadcrumbs?: IBreadcrumbs[]
}

const Breadcrumbs = forwardRef<HTMLDivElement, BreadcrumbsProps>(
  ({ breadcrumbs, separator = '›', ...props }: BreadcrumbsProps, ref) => {
    return (
      <MuiBreadcrumbs ref={ref} separator={separator} {...props}>
        {breadcrumbs?.map(({ to, label }, i) => (
          <RouterLink key={i} to={to ? to : undefined}>
            {label}
          </RouterLink>
        ))}
      </MuiBreadcrumbs>
    )
  },
)

export default Breadcrumbs
