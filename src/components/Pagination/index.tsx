import { forwardRef } from 'react'
import MuiPagination, { PaginationProps as MuiPaginationProps } from '@mui/material/Pagination'

export type PaginationProps = MuiPaginationProps

const Pagination = forwardRef<HTMLDivElement, PaginationProps>(({ ...props }: PaginationProps, ref) => {
  return <MuiPagination ref={ref} {...props} />
})

export default Pagination
