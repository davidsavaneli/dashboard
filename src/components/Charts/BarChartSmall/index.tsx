import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
import Card, { CardProps } from '../../Card'
import Title from '../../Title'
import Text from '../../Text'
import Icon from '../../Icon'
import { getCssColorVariable } from '../../../helpers'

import styles from './styles.module.css'

export interface BarChartSmallProps {
  cardProps?: Omit<CardProps, 'children'>
  color?: 'primary' | 'dark' | 'medium' | 'light' | 'success' | 'error' | 'info' | 'warning'
  horizontal?: boolean
}

const BarChartSmall = ({ cardProps, color = 'medium', horizontal = false }: BarChartSmallProps) => {
  const chartColor = getCssColorVariable(color)

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    colors: [chartColor],
    plotOptions: {
      bar: {
        borderRadius: 2,
        borderRadiusApplication: 'around',
        horizontal: horizontal,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
  }

  const series = [
    {
      name: 'users',
      data: [130, 100, 180, 70, 80, 130, 160],
    },
  ]

  return (
    <div className={styles.chart}>
      <Card icon='Chart1' {...cardProps} disableHeaderLine={true} iconColor={color}>
        <div className={styles.chartWrapper}>
          <div className={styles.chartBox}>
            <Chart options={options} series={series} type='bar' height={56} />
          </div>
          <div className={styles.rightInfo}>
            <div className={styles.primaryInfo}>
              <Title>3000$</Title>
            </div>
            <div className={styles.secondaryInfo}>
              <Icon color='success' name='ArrowUp' size='sm' />
              <Text color='success'>30.6%</Text>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default BarChartSmall
