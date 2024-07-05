import { forwardRef, useState } from 'react'
import { MuiTextField, MuiTextFieldProps } from '../../Mui'
import FormControl from '../FormControl'
import InputAdornment from '../InputAdornment'
import IconButton from '../IconButton'
import Icon, { IconName } from '../Icon'

export type TextFieldProps = MuiTextFieldProps & {
  isPassword?: boolean
  iconName?: IconName | ''
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ isPassword = false, iconName = '', variant = 'outlined', ...props }: TextFieldProps, ref) => {
    const [showPassword, setShowPassword] = useState<boolean>(!!isPassword)
    const handleShowPassword = () => setShowPassword(!showPassword)

    const IconComponent = isPassword ? (
      <InputAdornment position='end'>
        <IconButton onClick={handleShowPassword} iconName={showPassword ? 'EyeSlash' : 'Eye'} />
      </InputAdornment>
    ) : (
      iconName && (
        <InputAdornment position='end'>
          <IconButton iconName={iconName} />
        </InputAdornment>
      )
    )

    return (
      <FormControl>
        <MuiTextField
          ref={ref}
          variant={variant}
          type={!showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: IconComponent,
          }}
          {...props}
        />
      </FormControl>
    )
  },
)

export default TextField
