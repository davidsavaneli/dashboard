import { forwardRef } from 'react'
import { MuiBreadcrumbs, MuiBreadcrumbsProps } from '../../Mui'
import Link from '../Link'

export interface IBreadcrumbs {
  name: string
  to: string
}

export interface BreadcrumbsProps extends MuiBreadcrumbsProps {
  breadcrumbs?: IBreadcrumbs[]
}

const Breadcrumbs = forwardRef<HTMLDivElement, BreadcrumbsProps>(
  ({ breadcrumbs, separator = '›', ...props }: BreadcrumbsProps, ref) => {
    return (
      <MuiBreadcrumbs ref={ref} separator={separator} {...props}>
        {breadcrumbs?.map(({ to, name }, i) => (
          <Link key={i} href={to ? to : undefined}>
            {name}
          </Link>
        ))}
      </MuiBreadcrumbs>
    )
  },
)

export default Breadcrumbs
