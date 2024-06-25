import MuiPagination, { PaginationProps as MuiPaginationProps } from '@mui/material/Pagination'

export interface PaginationProps extends MuiPaginationProps {}

export const Pagination = ({ ...props }: PaginationProps) => {
  return <MuiPagination {...props} />
}
