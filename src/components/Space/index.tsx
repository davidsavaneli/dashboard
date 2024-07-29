import { ReactNode } from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

export interface SpaceProps {
  children?: ReactNode
  mt?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  mb?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  m?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
}

const Space = ({ children, mt, mb = 'sm', m }: SpaceProps) => {
  const classNames = clsx(styles.space, {
    [styles.marginTopXs]: mt === 'xs',
    [styles.marginTopSm]: mt === 'sm',
    [styles.marginTopMd]: mt === 'md',
    [styles.marginTopLg]: mt === 'lg',
    [styles.marginTopXl]: mt === 'xl',
    [styles.marginTopXxl]: mt === 'xxl',
    [styles.marginBottomXs]: mb === 'xs',
    [styles.marginBottomSm]: mb === 'sm',
    [styles.marginBottomMd]: mb === 'md',
    [styles.marginBottomLg]: mb === 'lg',
    [styles.marginBottomXl]: mb === 'xl',
    [styles.marginBottomXxl]: mb === 'xxl',
    [styles.marginXs]: m === 'xs',
    [styles.marginSm]: m === 'sm',
    [styles.marginMd]: m === 'md',
    [styles.marginLg]: m === 'lg',
    [styles.marginXl]: m === 'xl',
    [styles.marginXxl]: m === 'xxl',
  })

  return <div className={classNames}>{children}</div>
}

export default Space
