import Icon from '../Icon'

import styles from './styles.module.css'

export type FileProps = {
  name: string
  url: string
}

const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif', '.svg']

const hasImgExtension = (url: string) => {
  return imageExtensions.some((ext) => url.includes(ext))
}

const File = ({ name, url, ...props }: FileProps) => {
  return (
    <div className={styles.wrapper} {...props}>
      <div className={styles.fileBox}>
        <Icon className={styles.icon} name={hasImgExtension(url) ? 'Gallery' : 'DocumentText1'} />
        <div className={styles.text}>{name}</div>
        <a href={url} download>
          <Icon name='Login' />
        </a>
      </div>
    </div>
  )
}

export default File
