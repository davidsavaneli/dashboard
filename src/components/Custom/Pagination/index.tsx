import React, { forwardRef, memo } from 'react'
import Pagination, { PaginationProps } from '@mui/material/Pagination'

export type MDPaginationProps = PaginationProps

const MDPagination = forwardRef<HTMLDivElement, MDPaginationProps>(({ ...props }, ref) => {
  return <Pagination ref={ref} {...props} />
})

export default memo(MDPagination)
