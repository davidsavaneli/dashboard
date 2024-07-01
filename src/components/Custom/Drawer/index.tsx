import { ReactNode } from 'react'
import styles from './styles.module.css'

export type DrawerProps = {
  open?: boolean
}

const Drawer = ({ open = true }: DrawerProps) => {
  return <div className={styles.drawer}>Drawer</div>
}

export default Drawer
