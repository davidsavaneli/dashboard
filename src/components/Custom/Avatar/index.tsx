import { forwardRef } from 'react'
import clsx from 'clsx'
import { MuiAvatar, MuiAvatarProps } from '../../Mui'
import Icon, { IconName } from '../Icon'

import './styles.css'

export interface AvatarProps extends MuiAvatarProps {
  iconName?: IconName
  color?:
    | 'primary'
    | 'primaryLight'
    | 'secondary'
    | 'dark'
    | 'medium'
    | 'light'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ iconName, color = 'medium', size = 'md', children, ...props }: AvatarProps, ref) => {
    const classNames = clsx({
      ['MuiAvatar-colorPrimary']: color === 'primary',
      ['MuiAvatar-colorPrimaryLight']: color === 'primaryLight',
      ['MuiAvatar-colorSecondary']: color === 'secondary',
      ['MuiAvatar-colorDark']: color === 'dark',
      ['MuiAvatar-colorMedium']: color === 'medium',
      ['MuiAvatar-colorLight']: color === 'light',
      ['MuiAvatar-colorSuccess']: color === 'success',
      ['MuiAvatar-colorError']: color === 'error',
      ['MuiAvatar-colorInfo']: color === 'info',
      ['MuiAvatar-colorWarning']: color === 'warning',
      ['MuiAvatar-sizeXs']: size === 'xs',
      ['MuiAvatar-sizeSm']: size === 'sm',
      ['MuiAvatar-sizeMd']: size === 'md',
      ['MuiAvatar-sizeLg']: size === 'lg',
      ['MuiAvatar-sizeXl']: size === 'xl',
      ['MuiAvatar-sizeXxl']: size === 'xxl',
    })

    return (
      <MuiAvatar ref={ref} {...props} className={classNames}>
        {children}
        {iconName && <Icon name={iconName} color={color == 'secondary' ? 'primary' : 'secondary'} size='md' />}
      </MuiAvatar>
    )
  },
)

export default Avatar
