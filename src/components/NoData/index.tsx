import Title from '../Title'

import styles from './styles.module.css'

import imageSrc from '../../assets/images/empty-box.svg'

export interface NoDataProps {
  text?: string
  disableIcon?: boolean
}

const NoData = ({ text = '' }: NoDataProps) => {
  return (
    <div className={styles.noDataWrapper}>
      <div className={styles.image}>
        <img src={imageSrc} alt='No Data Found' />
      </div>
      {text && (
        <Title variant='h4' weight='medium'>
          {text}
        </Title>
      )}
    </div>
  )
}

export default NoData
