import { ReactNode } from 'react'
import styles from './styles.module.css'

export type CardProps = {
  label?: string
  children?: ReactNode
}

const Card = ({ label, children }: CardProps) => {
  return (
    <div className={styles.card}>
      {label && <h1>{label}</h1>}
      {children}
    </div>
  )
}

export default Card
