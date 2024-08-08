import { useField } from 'formik'
import Checkbox, { CheckboxProps } from '../../Checkbox'

const CheckboxValidator = ({ name, ...props }: CheckboxProps) => {
  const [field, meta, helpers] = useField(name as string)

  return (
    <Checkbox
      {...field}
      {...props}
      checked={field.value}
      onChange={(e) => helpers.setValue(e.target.checked)}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error ? String(meta.error) : undefined}
      color={meta.touched && meta.error ? 'error' : undefined}
    />
  )
}

export default CheckboxValidator
