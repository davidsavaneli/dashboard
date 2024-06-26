import { toast, ToastContent, ToastOptions } from 'react-toastify'
import Icon from '../Icon'

import 'react-toastify/dist/ReactToastify.css'

const createToasts = (
  position: ToastOptions['position'] = 'bottom-right',
  autoClose: ToastOptions['autoClose'] = 3000,
  hideProgressBar: ToastOptions['hideProgressBar'] = false,
  closeOnClick: ToastOptions['closeOnClick'] = false,
  pauseOnHover: ToastOptions['pauseOnHover'] = true,
  draggable: ToastOptions['draggable'] = true,
  progress: ToastOptions['progress'] = undefined,
  theme: ToastOptions['theme'] = 'light',
  closeButton: ToastOptions['closeButton'] = true,
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
      icon: <Icon name='CheckCircle' />,
      type: 'success',
      ...params,
      ...config,
    })

  const error = (message: ToastContent = '', config?: ToastOptions) =>
    toast(message, {
      icon: <Icon name='Error' />,
      type: 'error',
      ...params,
      ...config,
    })

  const warning = (message: ToastContent = '', config?: ToastOptions) =>
    toast(message, {
      icon: <Icon name='Warning' />,
      type: 'warning',
      ...params,
      ...config,
    })

  const info = (message: ToastContent = '', config?: ToastOptions) =>
    toast(message, {
      icon: <Icon name='Info' />,
      type: 'info',
      ...params,
      ...config,
    })

  return { error, success, warning, info }
}

const Toast = createToasts()

export default Toast
