import { ReactNode } from 'react'
import MuiAutocomplete, { AutocompleteProps as MuiAutocompleteProps } from '@mui/material/Autocomplete'
import TextField from '../TextField'
import Chip from '../Chip'
import Icon from '../Icon'

import './styles.css'

export interface AutocompleteOption {
  label: string
}

export interface AutocompleteProps<
  T extends AutocompleteOption | string,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined = undefined,
> extends Omit<MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>, 'renderInput'> {
  renderInput?: MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>['renderInput']
  label?: ReactNode
  error?: boolean
  helperText?: string
}

const Autocomplete = <
  T extends AutocompleteOption | string,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined = undefined,
>({
  label,
  error,
  helperText,
  ...props
}: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) => {
  return (
    <MuiAutocomplete
      className={!props.multiple ? 'MuiAutocomplete-root-single' : ''}
      disableCloseOnSelect={props.multiple}
      popupIcon={<Icon name='ArrowDown2' />}
      clearIcon={<Icon name='CloseCircle' />}
      renderInput={(params) => (
        <TextField className='MuiTextField-withIcon' {...params} label={label} error={error} helperText={helperText} />
      )}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => {
          const label = typeof option === 'string' ? option : option.label
          const { key, ...tagProps } = getTagProps({ index })
          return <Chip key={key} {...tagProps} label={label} />
        })
      }
      {...props}
    />
  )
}

export default Autocomplete
