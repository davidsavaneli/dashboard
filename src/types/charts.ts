export type ApexAxisChartSeries = {
  name?: string
  type?: string
  color?: string
  group?: string
  zIndex?: number
  data:
    | (number | null)[]
    | {
        x: any
        y: any
        fill?: ApexFill
        fillColor?: string
        strokeColor?: string
        meta?: any
        goals?: any
        barHeightOffset?: number
        columnWidthOffset?: number
      }[]
    | [number, number | null][]
    | [number, (number | null)[]][]
    | number[][]
}[]

export type ApexNonAxisChartSeries = number[]

type ApexFill = {
  colors?: any[]
  opacity?: number | number[]
  type?: string | string[]
  gradient?: {
    shade?: string
    type?: string
    shadeIntensity?: number
    gradientToColors?: string[]
    inverseColors?: boolean
    opacityFrom?: number | number[]
    opacityTo?: number | number[]
    stops?: number[]
    colorStops?: ApexColorStop[][] | ApexColorStop[]
  }
  image?: {
    src?: string | string[]
    width?: number
    height?: number
  }
  pattern?: {
    style?: string | string[]
    width?: number
    height?: number
    strokeWidth?: number
  }
}

type ApexColorStop = {
  offset: number
  color: string
  opacity: number
}
