import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
import ChartLayout, { ChartLayoutProps } from '../../ChartLayout'
import Title from '../../Title'
import Text from '../../Text'
import Icon from '../../Icon'
import { getCssColorVariable } from '../../../helpers'
import { BarChartSmallChartDataProps } from '../../../types'

import styles from './styles.module.css'

export interface BarChartSmallProps extends Omit<ChartLayoutProps, 'children'> {
  horizontal?: boolean
  chartData?: BarChartSmallChartDataProps
}

const BarChartSmall = ({ cardProps, color = 'medium', horizontal = false, chartData }: BarChartSmallProps) => {
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
        barHeight: '60%',
        columnWidth: '60%',
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

  return (
    <ChartLayout cardProps={cardProps} color={color}>
      <div className={styles.chartBox}>
        <Chart options={options} series={chartData?.series} type='bar' height={56} />
      </div>
      <div className={styles.rightInfo}>
        {chartData?.primaryInfo && (
          <div className={styles.primaryInfo}>
            <Title>{chartData?.primaryInfo}</Title>
          </div>
        )}
        <div className={styles.secondaryInfo}>
          <Icon color='success' name='ArrowUp' size='sm' />
          <Text color='success'>30.6%</Text>
        </div>
      </div>
    </ChartLayout>
  )
}

export default BarChartSmall
