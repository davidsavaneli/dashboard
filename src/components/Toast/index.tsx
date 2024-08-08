import { toast, ToastContent, ToastOptions } from 'react-toastify'
import Icon from '../Icon'

import 'react-toastify/dist/ReactToastify.css'
import './styles.css'

const CloseIcon = ({ closeToast }: any) => (
  <div className='Toastify__custom-close-button'>
    <Icon name='CloseSquare' variant='Bulk' color={'secondary'} onClick={closeToast} />
  </div>
)

const createToasts = (
  position: ToastOptions['position'] = 'bottom-right',
  autoClose: ToastOptions['autoClose'] = 3000,
  hideProgressBar: ToastOptions['hideProgressBar'] = false,
  closeOnClick: ToastOptions['closeOnClick'] = false,
  pauseOnHover: ToastOptions['pauseOnHover'] = true,
  draggable: ToastOptions['draggable'] = true,
  progress: ToastOptions['progress'] = undefined,
  theme: ToastOptions['theme'] = 'light',
  closeButton: ToastOptions['closeButton'] = CloseIcon,
) => {
  const params = {
    position: position,
    autoClose: autoClose,
    hideProgressBar: hideProgressBar,
    closeOnClick: closeOnClick,
    pauseOnHover: pauseOnHover,
    draggable: draggable,
    progress: progress,
    theme: theme,
    closeButton: closeButton,
  }

  const success = (message: ToastContent = '', config?: ToastOptions) =>
    toast(message, {
      icon: <Icon name='TickCircle' color='secondary' variant='Bold' />,
      type: 'success',
      ...params,
      ...config,
    })

  const error = (message: ToastContent = '', config?: ToastOptions) =>
    toast(message, {
      icon: <Icon name='CloseCircle' color='secondary' variant='Bold' />,
      type: 'error',
      ...params,
      ...config,
    })

  const warning = (message: ToastContent = '', config?: ToastOptions) =>
    toast(message, {
      icon: <Icon name='Warning2' color='secondary' variant='Bold' />,
      type: 'warning',
      ...params,
      ...config,
    })

  const info = (message: ToastContent = '', config?: ToastOptions) =>
    toast(message, {
      icon: <Icon name='InfoCircle' color='secondary' variant='Bold' />,
      type: 'info',
      ...params,
      ...config,
    })

  return { error, success, warning, info }
}

const Toast = createToasts()

export default Toast
