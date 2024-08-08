import { ReactNode } from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

export type TextProps = {
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
  weight?: 'regular' | 'medium' | 'bold'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  uppercase?: boolean
  children?: ReactNode
}

const Text = ({
  color = 'primaryLight',
  weight = 'regular',
  size = 'sm',
  uppercase = false,
  children,
  ...props
}: TextProps) => {
  const classNames = clsx(styles.text, {
    ['f-upper']: uppercase,
    [styles.colorPrimary]: color === 'primary',
    [styles.colorPrimaryLight]: color === 'primaryLight',
    [styles.colorSecondary]: color === 'secondary',
    [styles.colorDark]: color === 'dark',
    [styles.colorMedium]: color === 'medium',
    [styles.colorLight]: color === 'light',
    [styles.colorSuccess]: color === 'success',
    [styles.colorError]: color === 'error',
    [styles.colorInfo]: color === 'info',
    [styles.colorWarning]: color === 'warning',
    [styles.weightRegular]: weight === 'regular',
    [styles.weightMedium]: weight === 'medium',
    [styles.weightBold]: weight === 'bold',
    [styles.sizeXs]: size === 'xs',
    [styles.sizeSm]: size === 'sm',
    [styles.sizeMd]: size === 'md',
    [styles.sizeLg]: size === 'lg',
    [styles.sizeXl]: size === 'xl',
    [styles.sizeXxl]: size === 'xxl',
  })

  return (
    <p className={classNames} {...props}>
      {children}
    </p>
  )
}

export default Text
