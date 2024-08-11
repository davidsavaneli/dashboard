import { ReactNode } from 'react'
import Card, { CardProps } from '../Card'

import styles from './styles.module.css'

export type ChartLayoutProps = {
  cardProps?: Omit<CardProps, 'children'>
  color?: 'primary' | 'dark' | 'medium' | 'light' | 'success' | 'error' | 'info' | 'warning'
  children?: ReactNode
}

const ChartLayout = ({ cardProps, color, children }: ChartLayoutProps) => {
  return (
    <div className={styles.chart}>
      <Card icon='Chart1' {...cardProps} disableHeaderLine={true} iconColor={color}>
        <div className={styles.chartWrapper}>{children}</div>
      </Card>
    </div>
  )
}

export default ChartLayout
