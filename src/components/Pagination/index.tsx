import { forwardRef } from 'react'
import MuiPagination, { PaginationProps as MuiPaginationProps } from '@mui/material/Pagination'
import PaginationItem from '../PaginationItem'
import Icon from '../Icon'

export type PaginationProps = MuiPaginationProps

const Pagination = forwardRef<HTMLDivElement, PaginationProps>(({ ...props }: PaginationProps, ref) => {
  return (
    <MuiPagination
      ref={ref}
      renderItem={(item) => <PaginationItem slots={{ previous: PrevIcon, next: NextIcon }} {...item} />}
      {...props}
    />
  )
})

export default Pagination

const PrevIcon = () => <Icon name='ArrowLeft' size='sm' />
const NextIcon = () => <Icon name='ArrowRight' size='sm' />
