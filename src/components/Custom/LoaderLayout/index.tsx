import { ReactNode } from 'react'
import Loader from '../Loader'

export interface LoaderLayoutProps {
  children?: ReactNode
  isLoading?: boolean
}

const LoaderLayout = ({ children, isLoading }: LoaderLayoutProps) => {
  return isLoading ? <Loader /> : <>{children}</>
}

export default LoaderLayout
