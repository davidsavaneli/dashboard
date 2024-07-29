import { useField } from 'formik'
import NumberInput, { NumberInputProps } from '../../NumberInput'

const NumberInputValidator = ({ ...props }: NumberInputProps) => {
  const [field, mata, helpers] = useField(props.name as string)

  if (mata && mata.touched && mata.error) {
    props.error = true
    props.helperText = mata.error
  }

  return <NumberInput {...field} {...props} onChange={(e) => helpers.setValue(e)} />
}

export default NumberInputValidator
