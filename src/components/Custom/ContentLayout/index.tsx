import { ReactNode } from 'react'
import Card from '../Card'
import styles from './styles.module.css'

export type ContentLayoutProps = {
  label?: string
  breadcrumbs?: ReactNode
  children?: ReactNode
}

const ContentLayout = ({ label, breadcrumbs, children }: ContentLayoutProps) => {
  return (
    <div className={styles.contentWrapper}>
      {(label || breadcrumbs) && (
        <div className={styles.topSection}>
          {breadcrumbs && <div className={styles.breadcrumbs}>{breadcrumbs}</div>}
          {label && <h1>{label}</h1>}
        </div>
      )}
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default ContentLayout
