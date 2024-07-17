import { forwardRef } from 'react'
import { MuiFormHelperText, MuiFormHelperTextProps } from '../../Mui'

import './styles.css'

export interface FormHelperTextProps extends MuiFormHelperTextProps {}

const FormHelperText = forwardRef<HTMLLabelElement, FormHelperTextProps>(({ ...props }: FormHelperTextProps, ref) => {
  return <MuiFormHelperText ref={ref} {...props} />
})

export default FormHelperText
