import { memo } from 'react'
import styles from './styles.module.css'

const MDLoader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.box}>
        <div className={styles.bounce}></div>
        <div className={styles.bounce}></div>
        <div className={styles.bounce}></div>
      </div>
    </div>
  )
}

export default memo(MDLoader)
