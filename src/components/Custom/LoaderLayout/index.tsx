import { ReactNode } from 'react'
import ComponentLoader from '../ComponentLoader'

export interface LoaderLayoutProps {
  children?: ReactNode
  isLoading?: boolean
}

const LoaderLayout = ({ children, isLoading }: LoaderLayoutProps) => {
  return isLoading ? <ComponentLoader /> : children
}

export default LoaderLayout
