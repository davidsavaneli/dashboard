import { ReactNode } from 'react'
import styles from './styles.module.css'

export type CardProps = {
  title?: string
  headerActions?: ReactNode
  footerActions?: ReactNode
  children: ReactNode
}

const Card = ({ title, headerActions, footerActions, children }: CardProps) => {
  return (
    <div className={styles.card}>
      {(title || headerActions) && (
        <div className={styles.header}>
          <div>{title && <h4>{title}</h4>}</div>
          {headerActions && <div className={styles.headerActions}>{headerActions}</div>}
        </div>
      )}
      <div className={styles.content}>{children}</div>
      {footerActions && <div className={styles.footerActions}>{footerActions}</div>}
    </div>
  )
}

export default Card
