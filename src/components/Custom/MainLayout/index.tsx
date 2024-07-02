import { ReactNode } from 'react'
import LocalizationProvider from '../LocalizationProvider'
import ToastContainer from '../ToastContainer'
import styles from './styles.module.css'

export type MainLayoutProps = {
  children: ReactNode
  header?: ReactNode
  drawer?: ReactNode
}

const MainLayout = ({ children, header, drawer }: MainLayoutProps) => {
  return (
    <>
      <LocalizationProvider>
        <div className={styles.container}>
          {drawer}
          <div className={styles.wrapper}>
            {header}
            <main className={styles.main}>{children}</main>
          </div>
        </div>
      </LocalizationProvider>
      <ToastContainer />
    </>
  )
}

export default MainLayout
