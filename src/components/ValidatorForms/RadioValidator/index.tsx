import { useField } from 'formik'
import Radio, { RadioProps } from '../../Radio'

const RadioValidator = ({ ...props }: RadioProps) => {
  const [field, mata] = useField(props.name as string)

  if (mata && mata.touched && mata.error) {
    props.error = true
    props.helperText = mata.error
  }

  return <Radio {...field} {...props} color={props.error ? 'error' : undefined} />
}

export default RadioValidator
