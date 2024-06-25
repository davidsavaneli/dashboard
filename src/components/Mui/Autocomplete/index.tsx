import MuiAutocomplete, {
  AutocompleteProps as MuiAutocompleteProps,
  AutocompleteRenderInputParams as MuiAutocompleteRenderInputParams,
} from '@mui/material/Autocomplete'
import { ChipTypeMap } from '../Chip'

export interface AutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
> extends MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent> {}

export interface AutocompleteRenderInputParams extends MuiAutocompleteRenderInputParams {}

export const Autocomplete = <
  T,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
>({
  ...props
}: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>) => {
  return <MuiAutocomplete {...props} />
}
