import { forwardRef } from 'react'
import { MuiFormLabel, MuiFormLabelProps } from '../../Mui'
import Text from '../Text'

import './styles.css'

export interface FormLabelProps extends MuiFormLabelProps {}

const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(({ children, ...props }: FormLabelProps, ref) => {
  return (
    <MuiFormLabel ref={ref} {...props}>
      <Text>{children}</Text>
    </MuiFormLabel>
  )
})

export default FormLabel
