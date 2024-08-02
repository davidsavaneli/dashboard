import { useField } from 'formik'
import TextEditor, { TextEditorProps } from '../../TextEditor'

const TextEditorValidator = ({ ...props }: TextEditorProps) => {
  const [field, meta, helpers] = useField(props.name as string)

  return (
    <TextEditor
      value={field.value}
      onChange={(value) => helpers.setValue(value)}
      error={meta.touched && !!meta.error}
      helperText={meta.touched && meta.error ? meta.error : undefined}
      {...props}
    />
  )
}

export default TextEditorValidator
