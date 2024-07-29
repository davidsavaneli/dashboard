import { useField } from 'formik'
import NumberInput, { NumberInputProps } from '../../NumberInput'

const NumberInputValidator = ({ label, ...props }: NumberInputProps) => {
  const [field, meta, helpers] = useField(props.name as string)

  return (
    <NumberInput
      label={label}
      name={props.name}
      value={field.value}
      onChange={(value) => helpers.setValue(value)}
      error={meta.touched && !!meta.error}
      helperText={meta.touched && meta.error ? meta.error : undefined}
      disabled={props.disabled}
    />
  )
}

export default NumberInputValidator
