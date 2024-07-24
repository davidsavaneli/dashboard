import { forwardRef } from 'react'
import clsx from 'clsx'
import MuiFormControlLabel, { FormControlLabelProps as MuiFormControlLabelProps } from '@mui/material/FormControlLabel'

import './styles.css'

export interface FormControlLabelProps extends MuiFormControlLabelProps {
  size?: 'sm' | 'md' | 'lg'
}

const FormControlLabel = forwardRef<HTMLLabelElement, FormControlLabelProps>(
  ({ size = 'md', ...props }: FormControlLabelProps, ref) => {
    const classNames = clsx({
      ['MuiFormControlLabel-sizeSm']: size === 'sm',
      ['MuiFormControlLabel-sizeMd']: size === 'md',
      ['MuiFormControlLabel-sizeLg']: size === 'lg',
    })

    return <MuiFormControlLabel ref={ref} className={classNames} {...props} />
  },
)

export default FormControlLabel
