import { ReactNode } from 'react'
import '../../i18n'
import LocalizationProvider from '../LocalizationProvider'
import ToastContainer from '../ToastContainer'
import useScrollToTop from '../../hooks/useScrollToTop'

import '../../assets/css/fonts.css'
import '../../assets/css/variables.css'
import '../../assets/css/normalize.css'
import '../../assets/css/grids.css'
import '../../assets/css/general.css'

import styles from './styles.module.css'

export type MainLayoutProps = {
  children: ReactNode
  header?: ReactNode
  drawer?: ReactNode
  breadcrumbs?: ReactNode
}

const MainLayout = ({ children, header, drawer, breadcrumbs }: MainLayoutProps) => {
  useScrollToTop()

  return (
    <>
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
    </>
  )
}

export default MainLayout
