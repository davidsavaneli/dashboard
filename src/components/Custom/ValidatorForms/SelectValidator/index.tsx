import { useField } from 'formik'
import Select, { SelectProps } from '../../Select'

const SelectValidator = ({ ...props }: SelectProps) => {
  const [field, mata] = useField(props.name as string)

  if (mata && mata.touched && mata.error) {
    props.error = true
    props.helperText = mata.error
  }

  return <Select {...field} {...props} />
}

export default SelectValidator
