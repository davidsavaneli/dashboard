import { forwardRef } from 'react'
import { MuiBreadcrumbs, MuiBreadcrumbsProps } from '../../Mui'

export interface BreadcrumbsProps extends MuiBreadcrumbsProps {}

const Breadcrumbs = forwardRef<HTMLDivElement, BreadcrumbsProps>(
  ({ separator = '›', ...props }: BreadcrumbsProps, ref) => {
    return <MuiBreadcrumbs ref={ref} separator={separator} {...props} />
  },
)

export default Breadcrumbs
