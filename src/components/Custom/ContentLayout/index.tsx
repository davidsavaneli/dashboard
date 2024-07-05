import { ReactNode } from 'react'
import Title from '../Title'
import styles from './styles.module.css'

export type ContentLayoutProps = {
  label?: string
  children?: ReactNode
}

const ContentLayout = ({ label, children }: ContentLayoutProps) => {
  return (
    <div className={styles.contentWrapper}>
      {label && <div className={styles.topSection}>{label && <Title variant='h1'>{label}</Title>}</div>}
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default ContentLayout
