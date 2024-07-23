import { useField } from 'formik'
import Checkbox, { CheckboxProps } from '../../Checkbox'

const CheckboxValidator = ({ ...props }: CheckboxProps) => {
  const [field, mata] = useField(props.name as string)

  if (mata && mata.touched && mata.error) {
    props.error = true
    props.helperText = mata.error
  }

  return <Checkbox {...field} {...props} />
}

export default CheckboxValidator
