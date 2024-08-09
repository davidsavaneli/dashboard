import { ReactNode } from 'react'
import clsx from 'clsx'
import MuiDialog, { DialogProps as MuiDialogProps } from '@mui/material/Dialog'
import MuiDialogTitle from '@mui/material/DialogTitle'
import MuiDialogContent from '@mui/material/DialogContent'
import MuiDialogActions from '@mui/material/DialogActions'
import Title from '../Title'
import IconButton from '../IconButton'
import TranslationText from '../TranslationText'

import './styles.css'

export interface DialogProps extends Omit<MuiDialogProps, 'title'> {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  title?: string
  actions?: ReactNode
  onClose: () => void
}

const Dialog = ({ size = 'md', title, actions, onClose, ...props }: DialogProps) => {
  const classNames = clsx({
    ['MuiDialog-sizeSm']: size === 'sm',
    ['MuiDialog-sizeMd']: size === 'md',
    ['MuiDialog-sizeLg']: size === 'lg',
    ['MuiDialog-sizeXl']: size === 'xl',
  })

  return (
    <MuiDialog className={classNames} onClose={onClose} {...props}>
      <MuiDialogTitle>
        <div>{title && <Title variant='h4'>{title}</Title>}</div>
        <IconButton
          className='MuiDialog-closeIcon'
          iconName='Add'
          onClick={onClose}
          tooltipTitle={<TranslationText text='close' />}
        />
      </MuiDialogTitle>
      <MuiDialogContent>{props.children}</MuiDialogContent>
      {actions && <MuiDialogActions>{actions}</MuiDialogActions>}
    </MuiDialog>
  )
}

export default Dialog
