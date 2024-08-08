import { useField } from 'formik'
import FileUploader, { FileUploaderProps } from '../../FileUploader'

const FileUploaderValidator = ({ name, ...props }: FileUploaderProps) => {
  const [field, meta, helpers] = useField(name as string)

  return (
    <FileUploader
      {...field}
      {...props}
      onFilesChange={(files) => helpers.setValue(files)}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error ? String(meta.error) : ''}
    />
  )
}

export default FileUploaderValidator
