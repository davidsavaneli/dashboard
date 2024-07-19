import { forwardRef, ReactNode } from 'react'
import { MuiAutocomplete, MuiAutocompleteProps } from '../../Mui'
import TextField from '../TextField'
import Chip from '../Chip'
import Icon from '../Icon'
import FormControl from '../FormControl'

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
}

const Autocomplete = forwardRef<
  HTMLDivElement,
  AutocompleteProps<AutocompleteOption | string, boolean | undefined, boolean | undefined, boolean | undefined>
>(({ label, ...props }, ref) => {
  return (
    <FormControl>
      <MuiAutocomplete
        disableCloseOnSelect
        popupIcon={<Icon name='ArrowDown2' />}
        clearIcon={<Icon name='CloseCircle' />}
        renderInput={(params) => <TextField className='MuiTextField-withIcon' {...params} label={label} />}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => {
            const label = typeof option === 'string' ? option : option.label
            const { key, ...tagProps } = getTagProps({ index })
            return <Chip key={key} {...tagProps} label={label} />
          })
        }
        ref={ref}
        {...props}
      />
    </FormControl>
  )
})

export default Autocomplete
