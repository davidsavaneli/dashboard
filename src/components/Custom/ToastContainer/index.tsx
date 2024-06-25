import {
  ToastContainer as CustomToastContainer,
  ToastContainerProps as CustomToastContainerProps,
} from 'react-toastify'

export interface ToastContainerProps extends CustomToastContainerProps {}

const ToastContainer = ({ ...props }: ToastContainerProps) => {
  return <CustomToastContainer {...props} />
}

export default ToastContainer
