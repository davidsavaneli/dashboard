import { ReactNode } from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

export type TitleProps = {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
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
  uppercase?: boolean
  children?: ReactNode
}

const Title = ({
  variant = 'h4',
  color = 'primary',
  weight = 'bold',
  uppercase = false,
  children,
  ...props
}: TitleProps) => {
  const Tag = variant || 'h5'

  const classNames = clsx(styles.titleBox, {
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
  })

  return (
    <div className={classNames} {...props}>
      {children && <Tag className={clsx({ 'f-upper': uppercase })}>{children}</Tag>}
    </div>
  )
}

export default Title
