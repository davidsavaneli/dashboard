import { useField } from 'formik'
import TextField, { TextFieldProps } from '../../TextField'

const TextFieldValidator = ({ ...props }: TextFieldProps) => {
  const [field, mata] = useField(props.name as string)

  if (mata && mata.touched && mata.error) {
    props.error = true
    props.helperText = mata.error
  }

  return <TextField {...field} {...props} />
}

export default TextFieldValidator
