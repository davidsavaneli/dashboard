export const calculateChartPercentage = (data: (number | null)[]): string => {
  const filteredData = data.filter((value): value is number => value !== null)

  if (filteredData.length === 0) return 'N/A'

  const firstValue = filteredData[0]
  const lastValue = filteredData[filteredData.length - 1]
  const percentageChange = ((lastValue - firstValue) / firstValue) * 100

  const sign = percentageChange > 0 ? '+' : ''
  return `${sign}${percentageChange.toFixed(2)}%`
}

export const isValidChartDataArray = (data: any): (number | null)[] => {
  if (Array.isArray(data)) {
    if (typeof data[0] === 'number' || data[0] === null) {
      return data as (number | null)[]
    }

    if (typeof data[0] === 'object' && 'y' in data[0]) {
      return data.map((item: { y: number | null }) => item.y)
    }
  }

  return []
}

export const getChartPercentageColor = (x: string) => {
  switch (true) {
    case x.startsWith('+'):
      return 'success'
    case x.startsWith('-'):
      return 'error'
    default:
      return 'primary'
  }
}
