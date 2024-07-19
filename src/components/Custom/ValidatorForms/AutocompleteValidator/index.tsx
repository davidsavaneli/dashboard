import { useField } from 'formik'
import Autocomplete, { AutocompleteProps, AutocompleteOption } from '../../Autocomplete'
import TextFieldValidator from '../TextFieldValidator'

interface AutocompleteValidatorProps<
  T extends AutocompleteOption | string,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined = undefined,
> extends AutocompleteProps<T, Multiple, DisableClearable, FreeSolo> {
  name: string
}

const AutocompleteValidator = <
  T extends AutocompleteOption | string,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined = undefined,
>({
  name,
  ...props
}: AutocompleteValidatorProps<T, Multiple, DisableClearable, FreeSolo>) => {
  const [field, meta, helpers] = useField(name)

  const error = meta.touched && Boolean(meta.error)
  const helperText = meta.touched && meta.error ? meta.error : props.helperText

  return (
    <Autocomplete
      {...props}
      {...field}
      multiple={props.multiple as Multiple}
      renderInput={(params) => (
        <TextFieldValidator
          {...params}
          name={name}
          label={props.label}
          error={error}
          helperText={helperText}
          className='MuiTextField-withIcon'
        />
      )}
      onChange={(event, value, reason, details) => {
        helpers.setValue(value)
        if (props.onChange) {
          props.onChange(event, value, reason, details)
        }
      }}
    />
  )
}

export default AutocompleteValidator
