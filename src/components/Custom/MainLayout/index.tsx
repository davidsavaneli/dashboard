import { ReactNode } from 'react'
import styles from './styles.module.css'

export type MainLayoutProps = {
  children: ReactNode
  header?: ReactNode
  drawer?: ReactNode
}

const MainLayout = ({ children, header, drawer }: MainLayoutProps) => {
  return (
    <div className={styles.container}>
      {drawer}
      <div className={styles.wrapper}>
        {header}
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  )
}

export default MainLayout
