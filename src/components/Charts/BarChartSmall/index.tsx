import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
import ChartLayout, { ChartLayoutProps } from '../../ChartLayout'
import Title from '../../Title'
import Text from '../../Text'
import {
  getCssColorVariable,
  isValidChartDataArray,
  calculateChartPercentage,
  getChartPercentageColor,
} from '../../../helpers'
import { ApexAxisChartSeries } from '../../../types'

import styles from './styles.module.css'

export interface BarChartSmallProps extends Omit<ChartLayoutProps, 'children'> {
  horizontal?: boolean
  series?: ApexAxisChartSeries
  additionalInfo?: {
    primary?: {
      label?: string | number
    }
    secondary?: {
      label?: string | number
      isPercentage?: boolean
    }
  }
}

const BarChartSmall = ({
  cardProps,
  color = 'medium',
  horizontal = false,
  series = [],
  additionalInfo,
}: BarChartSmallProps) => {
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

  const formattedPercentage =
    series.length > 0 ? calculateChartPercentage(isValidChartDataArray(series[0].data)) : 'N/A'

  return (
    <ChartLayout cardProps={cardProps} color={color}>
      <div className={styles.chartBox}>
        <Chart options={options} series={series} type='bar' height={56} />
      </div>
      <div className={styles.rightInfo}>
        {additionalInfo?.primary?.label && (
          <div className={styles.primaryInfo}>
            <Title>{additionalInfo?.primary?.label}</Title>
          </div>
        )}
        {(additionalInfo?.secondary?.label || additionalInfo?.secondary?.isPercentage) && (
          <div className={styles.secondaryInfo}>
            <Text
              color={additionalInfo.secondary.isPercentage ? getChartPercentageColor(formattedPercentage) : 'primary'}
            >
              {additionalInfo.secondary.isPercentage ? formattedPercentage : additionalInfo.secondary.label}
            </Text>
          </div>
        )}
      </div>
    </ChartLayout>
  )
}

export default BarChartSmall