import CircularProgress from '../CircularProgress'
import clsx from 'clsx'

import styles from './styles.module.css'

interface ComponentLoaderProps {
  componentType?: 'page' | 'component'
}

const ComponentLoader = ({ componentType = 'component' }: ComponentLoaderProps) => {
  return (
    <div
      className={clsx(styles.loader, {
        [styles.page]: componentType === 'page',
        [styles.component]: componentType === 'component',
      })}
    >
      <CircularProgress size={componentType === 'component' ? 'md' : 'xxl'} />
    </div>
  )
}

export default ComponentLoader
