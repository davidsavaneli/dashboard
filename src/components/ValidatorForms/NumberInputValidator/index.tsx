import { useField } from 'formik'
import NumberInput, { NumberInputProps } from '../../NumberInput'

const NumberInputValidator = ({ ...props }: NumberInputProps) => {
  const [field, meta, helpers] = useField(props.name as string)

  return (
    <NumberInput
      value={field.value}
      onChange={(value) => helpers.setValue(value)}
      error={meta.touched && !!meta.error}
      helperText={meta.touched && meta.error ? meta.error : undefined}
      {...props}
    />
  )
}

export default NumberInputValidator
