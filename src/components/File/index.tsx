import Avatar from '../Avatar'
import IconButton from '../IconButton'
import ListItem from '../ListItem'
import ListItemAvatar from '../ListItemAvatar'
import ListItemText from '../ListItemText'
import Text from '../Text'
import TranslationText from '../TranslationText'

import styles from './styles.module.css'

export interface FileProps {
  name: string
  url: string
  donwload?: boolean
}

const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'avif', 'svg']

const getFileFormat = (url: FileProps['url']) => {
  const parts = url.split('/')
  const fileName = parts[parts.length - 1]
  const fileParts = fileName.split('.')
  return fileParts[fileParts.length - 1]
}

const hasImgExtension = (url: FileProps['url']) => {
  const format = getFileFormat(url)
  return imageExtensions.includes(format)
}

const File = ({ name, url, donwload = true, ...props }: FileProps) => {
  return (
    <div className={styles.wrapper} {...props}>
      <ListItem
        secondaryAction={
          donwload && (
            <a className={styles.donwload} href={url} download>
              <IconButton
                tooltipTitle={<TranslationText text='download' />}
                iconName='LoginCurve'
                variant='filled'
                color='success'
                size='sm'
              />
            </a>
          )
        }
      >
        <ListItemAvatar>
          {hasImgExtension(url) ? (
            <Avatar size='lg' src={url}></Avatar>
          ) : (
            <Avatar size='lg' color='medium' iconName='DocumentText1'></Avatar>
          )}
        </ListItemAvatar>
        <ListItemText>
          <div className={styles.name}>
            <Text color='primary' weight='medium'>
              {name}
            </Text>
          </div>
          <Text size='xs'>{getFileFormat(url)}</Text>
        </ListItemText>
      </ListItem>
    </div>
  )
}

export default File
