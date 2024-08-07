import clsx from 'clsx'
import Avatar from '../Avatar'
import ListItem from '../ListItem'
import IconButton from '../IconButton'
import ListItemAvatar from '../ListItemAvatar'
import ListItemText from '../ListItemText'
import Text from '../Text'
import useFile from './useFile'

import styles from './styles.module.css'

export interface MiniFileUploaderProps {
  onFileSelect?: (file: File) => void
  text?: string
  url?: string
  disabled?: boolean
}

const MiniFileUploader = ({
  onFileSelect = () => {},
  text = 'Upload Image',
  url = '',
  disabled = false,
}: MiniFileUploaderProps) => {
  const { handelSelect, previewImage, selectedFile, fileType } = useFile({
    url,
    onFileSelect,
  })

  const getFileNameFromUrl = (url: string) => {
    try {
      const parsedUrl = new URL(url)
      return parsedUrl.pathname.split('/').pop() || ''
    } catch (error) {
      return ''
    }
  }

  const displayText = selectedFile?.name || getFileNameFromUrl(url)

  return (
    <div
      className={clsx(styles.uploadBox, {
        [styles.disabled]: disabled,
      })}
    >
      <ListItem
        secondaryAction={
          <div className={styles.uploadIcon}>
            <IconButton iconName='ExportCurve' variant='filled' color='success' size='sm' />
          </div>
        }
      >
        <ListItemAvatar>
          {previewImage ? (
            <Avatar size='lg' src={previewImage}></Avatar>
          ) : (
            <Avatar size='lg' color='medium' iconName='Gallery'></Avatar>
          )}
        </ListItemAvatar>
        <ListItemText>
          <div className={styles.text}>
            <Text color='primary' weight='medium'>
              {url ? displayText : text}
            </Text>
          </div>
          {(selectedFile?.type || fileType) && <Text size='xs'>{selectedFile?.type || fileType}</Text>}
        </ListItemText>
      </ListItem>
      <input
        type='file'
        disabled={disabled}
        onChange={handelSelect}
        className={styles.input}
        accept='image/jpeg, image/png, image/gif, image/webp, image/avif, image/svg+xml'
      />
    </div>
  )
}

export default MiniFileUploader
