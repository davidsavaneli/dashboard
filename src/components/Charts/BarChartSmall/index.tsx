import { ReactNode, useState } from 'react'
import clsx from 'clsx'
import Card, { CardProps } from '../../Card'
import IconButton from '../../IconButton'

import styles from './styles.module.css'

export interface BarChartSmallProps {
  title?: string
  cardProps?: Omit<CardProps, 'children'>
}

const BarChartSmall = ({ title, cardProps }: BarChartSmallProps) => {
  return (
    <div className={styles.chart}>
      <Card {...cardProps}>...</Card>
    </div>
  )
}

export default BarChartSmall
