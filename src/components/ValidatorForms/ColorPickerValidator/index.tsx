import { useField } from 'formik'
import ColorPicker, { ColorPickerProps } from '../../ColorPicker'

const ColorPickerValidator = ({ ...props }: ColorPickerProps) => {
  const [field, meta, helpers] = useField(props.name as string)

  return (
    <ColorPicker
      {...field}
      {...props}
      onChange={(e) => helpers.setValue(e)}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error ? String(meta.error) : undefined}
    />
  )
}

export default ColorPickerValidator
