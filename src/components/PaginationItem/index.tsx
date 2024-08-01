import { forwardRef } from 'react'
import MuiPaginationItem, { PaginationItemProps as MuiPaginationItemProps } from '@mui/material/PaginationItem'

import './styles.css'

export type PaginationItemProps = MuiPaginationItemProps

const PaginationItem = forwardRef<HTMLDivElement, PaginationItemProps>(({ ...props }: PaginationItemProps, ref) => {
  return <MuiPaginationItem ref={ref}  {...props} />
})

export default PaginationItem
