import { ReactNode } from 'react'
import Card, { CardProps } from '../../Card'

import styles from './styles.module.css'

export interface BarChartSmallProps {
  children: ReactNode
  cardProps?: Omit<CardProps, 'children'>
}

const BarChartSmall = ({ children, cardProps }: BarChartSmallProps) => {
  return (
    <div className={styles.chart}>
      <Card icon='Chart1' {...cardProps}>
        {children}
      </Card>
    </div>
  )
}

export default BarChartSmall
