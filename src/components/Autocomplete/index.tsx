import React, { memo } from 'react'
import {
  default as MuiAutocomplete,
  AutocompleteProps,
  AutocompleteRenderInputParams,
} from '@mui/material/Autocomplete'
import { ChipTypeMap } from '@mui/material/Chip'
import MDFormControl from '../FormControl'
import MDTextField, { MDTextFieldProps } from '../TextField'

export interface MDAutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
> extends Omit<
    AutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>,
    | 'clearIcon'
    | 'clearText'
    | 'closeText'
    | 'componentsProps'
    | 'disabledItemsFocusable'
    | 'forcePopupIcon'
    | 'fullWidth'
    | 'handleHomeEndKeys'
    | 'includeInputInList'
    | 'openOnFocus'
    | 'openText'
    | 'PaperComponent'
    | 'PopperComponent'
    | 'popupIcon'
    | 'selectOnFocus'
    | 'size'
    | 'renderInput'
  > {
  FieldProps?: MDTextFieldProps
  label?: string
}

const MDAutocomplete = <
  T,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
>({
  FieldProps,
  label,
  ...props
}: MDAutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>): JSX.Element => {
  return (
    <MDFormControl>
      <MuiAutocomplete
        disableCloseOnSelect
        renderInput={(params: AutocompleteRenderInputParams) => <MDTextField {...params} label={label} />}
        {...props}
      />
    </MDFormControl>
  )
}

export default memo(MDAutocomplete)
