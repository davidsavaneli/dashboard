import { ReactNode } from 'react'

export interface TitleProps {
  children: ReactNode
}

const Title = ({ children }: TitleProps) => {
  return <h1>{children}</h1>
}

export default Title
