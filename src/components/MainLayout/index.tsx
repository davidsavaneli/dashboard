import { ReactNode } from 'react'
import LocalizationProvider from '../LocalizationProvider'
import ToastContainer from '../ToastContainer'
import { DarkModeProvider, ShowDrawerProvider } from '../../hooks'

import styles from './styles.module.css'

export type MainLayoutProps = {
  children: ReactNode
  header?: ReactNode
  drawer?: ReactNode
  breadcrumbs?: ReactNode
}

const MainLayout = ({ children, header, drawer, breadcrumbs }: MainLayoutProps) => {
  return (
    <DarkModeProvider>
      <ShowDrawerProvider>
        <LocalizationProvider>
          <div className={styles.container}>
            {drawer}
            <div className={styles.wrapper}>
              {header}
              <main className={styles.main}>
                {breadcrumbs && <div className={styles.breadcrumbs}>{breadcrumbs}</div>}
                {children}
              </main>
            </div>
          </div>
        </LocalizationProvider>
        <ToastContainer />
      </ShowDrawerProvider>
    </DarkModeProvider>
  )
}

export default MainLayout
