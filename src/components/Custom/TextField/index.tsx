import { forwardRef, useState } from 'react'
import { MuiTextField, MuiTextFieldProps } from '../../Mui'
import FormControl from '../FormControl'
import InputAdornment from '../InputAdornment'

export type TextFieldProps = MuiTextFieldProps & {
  isPassword?: boolean
  iconName?: string
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ isPassword = false, iconName = '', variant = 'outlined', ...props }, ref) => {
    const [showPassword, setShowPassword] = useState<boolean>(!!isPassword)
    const handleShowPassword = () => setShowPassword(!showPassword)

    const Icon = isPassword ? (
      <InputAdornment position='end'>
        <div onClick={handleShowPassword}>Password</div>
      </InputAdornment>
    ) : (
      iconName && <InputAdornment position='end'>Icon</InputAdornment>
    )

    return (
      <FormControl>
        <MuiTextField
          ref={ref}
          variant={variant}
          type={!showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: Icon,
          }}
          {...props}
        />
      </FormControl>
    )
  },
)

export default TextField
