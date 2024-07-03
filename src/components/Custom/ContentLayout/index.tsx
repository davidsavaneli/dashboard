import { ReactNode } from 'react'
import styles from './styles.module.css'

export type ContentLayoutProps = {
  label?: string
  children?: ReactNode
}

const ContentLayout = ({ label, children }: ContentLayoutProps) => {
  return (
    <div className={styles.contentWrapper}>
      {label && <div className={styles.topSection}>{label && <h1>{label}</h1>}</div>}
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default ContentLayout
