import { forwardRef } from 'react'
import clsx from 'clsx'
import MuiAvatarGroup, { AvatarGroupProps as MuiAvatarGroupProps } from '@mui/material/AvatarGroup'

import './styles.css'

export interface AvatarGroupProps extends MuiAvatarGroupProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
}

const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(({ size = 'md', ...props }: AvatarGroupProps, ref) => {
  const classNames = clsx({
    ['MuiAvatarGroup-sizeXs']: size === 'xs',
    ['MuiAvatarGroup-sizeSm']: size === 'sm',
    ['MuiAvatarGroup-sizeMd']: size === 'md',
    ['MuiAvatarGroup-sizeLg']: size === 'lg',
    ['MuiAvatarGroup-sizeXl']: size === 'xl',
    ['MuiAvatarGroup-sizeXxl']: size === 'xxl',
  })

  return <MuiAvatarGroup ref={ref} className={classNames} {...props} />
})

export default AvatarGroup
