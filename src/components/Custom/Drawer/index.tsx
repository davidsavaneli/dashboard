import { ReactNode } from 'react'
import styles from './styles.module.css'

export type DrawerProps = {
  open?: boolean
  children?: ReactNode
}

const Drawer = ({ open = true, children }: DrawerProps) => {
  return <div className={styles.drawer}>{children}</div>
}

export default Drawer
