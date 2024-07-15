import { forwardRef } from 'react'
import clsx from 'clsx'
import { MuiFormLabel, MuiFormLabelProps } from '../../Mui'

import './styles.css'

export interface FormLabelProps extends MuiFormLabelProps {
  size?: 'sm' | 'md' | 'lg'
}

const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(({ size = 'md', ...props }: FormLabelProps, ref) => {
  const classNames = clsx({
    ['MuiFormLabel-sizeSm']: size === 'sm',
    ['MuiFormLabel-sizeMd']: size === 'md',
    ['MuiFormLabel-sizeLg']: size === 'lg',
  })

  return <MuiFormLabel ref={ref} className={classNames} {...props} />
})

export default FormLabel
