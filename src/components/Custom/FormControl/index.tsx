import { forwardRef } from 'react'
import { MuiFormControl, MuiFormControlProps } from '../../Mui'

import './styles.css'

export interface FormControlProps extends MuiFormControlProps {}

const FormControl = forwardRef<HTMLDivElement, FormControlProps>(
  ({ fullWidth = true, ...props }: FormControlProps, ref) => {
    return <MuiFormControl ref={ref} fullWidth={fullWidth} {...props} />
  },
)

export default FormControl
