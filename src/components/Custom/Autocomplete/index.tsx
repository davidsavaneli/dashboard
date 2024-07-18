import { forwardRef } from 'react'
import { MuiAutocomplete, MuiAutocompleteProps, MuiAutocompleteRenderInputParams } from '../../Mui'
import TextField, { TextFieldProps } from '../TextField'
import FormControl from '../FormControl'
import Chip, { ChipTypeMap } from '../Chip'
import Icon from '../Icon'

import './styles.css'
import CircularProgress from '../CircularProgress'

export interface AutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
> extends Omit<MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>, 'renderInput'> {
  FieldProps?: TextFieldProps
  label?: string
}

const Autocomplete = forwardRef(function Autocomplete<
  T,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
>(
  { FieldProps, label, ...props }: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>,
  ref: React.Ref<HTMLElement>,
): JSX.Element {
  return (
    <FormControl>
      <MuiAutocomplete
        disableCloseOnSelect
        renderInput={(params: MuiAutocompleteRenderInputParams) => (
          <TextField className='MuiTextField-withIcon' label={label} {...params} />
        )}
        ref={ref}
        {...props}
        popupIcon={<Icon name='ArrowDown2' />}
        clearIcon={<Icon name='CloseCircle' />}
      />
    </FormControl>
  )
})

export default Autocomplete
