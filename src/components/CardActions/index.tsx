import { ReactNode } from 'react'

import styles from './styles.module.css'

export interface CardActionsProps {
  children: ReactNode
}

const CardActions = ({ children }: CardActionsProps) => {
  return children ? <div className={styles.cardActions}>{children}</div> : null
}

export default CardActions
