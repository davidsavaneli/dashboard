import MuiBreadcrumbs, { BreadcrumbsProps as MuiBreadcrumbsProps } from '@mui/material/Breadcrumbs'

export interface BreadcrumbsProps extends MuiBreadcrumbsProps {}

export const Breadcrumbs = ({ ...props }: BreadcrumbsProps) => {
  return <MuiBreadcrumbs {...props} />
}
