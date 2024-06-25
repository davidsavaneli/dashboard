import { forwardRef } from 'react'
import { MuiPagination, MuiPaginationProps } from '../../Mui'

export type PaginationProps = MuiPaginationProps

const Pagination = forwardRef<HTMLDivElement, PaginationProps>(({ ...props }, ref) => {
  return <MuiPagination ref={ref} {...props} />
})

export default Pagination
