import { forwardRef, useState } from 'react'
import MuiDialog, { DialogProps as MuiDialogProps } from '@mui/material/Dialog'
import MuiDialogTitle from '@mui/material/Dialog'
import Icon from '../Icon'

import './styles.css'

export interface DialogProps extends MuiDialogProps {}

const Dialog = () => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <MuiDialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault()
          const formData = new FormData(event.currentTarget)
          const formJson = Object.fromEntries((formData as any).entries())
          const email = formJson.email
          console.log(email)
          handleClose()
        },
      }}
    >
      <MuiDialogTitle open={false}>Subscribe</MuiDialogTitle>
      
      {/* <DialogContent>Content</DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type='submit'>Subscribe</Button>
      </DialogActions> */}
    </MuiDialog>
  )
}

export default Dialog
