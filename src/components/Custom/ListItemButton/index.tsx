import { forwardRef } from 'react'
import clsx from 'clsx'
import { MuiListItemButton, MuiListItemButtonProps } from '../../Mui'
import './styles.css'

export interface ListItemButtonProps extends MuiListItemButtonProps {
  size?: 'sm' | 'md' | 'lg'
}

const ListItemButton = forwardRef<HTMLDivElement, ListItemButtonProps>(
  ({ size = 'sm', className, ...props }: ListItemButtonProps, ref) => {
    const classNames = clsx({
      ['MuiListItemButton-sizeSm']: size === 'sm',
      ['MuiListItemButton-sizeMd']: size === 'md',
      ['MuiListItemButton-sizeLg']: size === 'lg',
    })

    return <MuiListItemButton ref={ref} className={clsx(classNames, className)} {...props} />
  },
)

export default ListItemButton
