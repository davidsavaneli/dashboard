import { toast, ToastContent, ToastOptions } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import MDIcon from '../Icon'

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
      icon: <MDIcon name='MdCheckCircle' />,
      type: 'success',
      ...params,
      ...config,
    })

  const error = (message: ToastContent = '', config?: ToastOptions) =>
    toast(message, {
      icon: <MDIcon name='MdError' />,
      type: 'error',
      ...params,
      ...config,
    })

  const warning = (message: ToastContent = '', config?: ToastOptions) =>
    toast(message, {
      icon: <MDIcon name='MdWarning' />,
      type: 'warning',
      ...params,
      ...config,
    })

  const info = (message: ToastContent = '', config?: ToastOptions) =>
    toast(message, {
      icon: <MDIcon name='MdInfo' />,
      type: 'info',
      ...params,
      ...config,
    })

  return { error, success, warning, info }
}

const MDToast = createToasts()

export default MDToast
