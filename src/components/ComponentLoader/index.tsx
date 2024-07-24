import CircularProgress from '../CircularProgress'
import styles from './styles.module.css'

const ComponentLoader = () => {
  return (
    <div className={styles.loader}>
      <CircularProgress />
    </div>
  )
}

export default ComponentLoader
