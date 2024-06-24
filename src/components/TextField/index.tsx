import React, { forwardRef, useState, RefAttributes, memo } from 'react'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import FormControl from '../FormControl'
import InputAdornment from '../InputAdornment'

export type MDTextFieldProps = TextFieldProps & {
  isPassword?: boolean
  iconName?: string
}

const MDTextField = forwardRef<HTMLInputElement, MDTextFieldProps>(
  ({ isPassword = false, iconName = '', variant = 'outlined', size = 'medium', ...props }, ref) => {
    const [showPassword, setShowPassword] = useState<boolean>(!!isPassword)
    const handleClickShowPassword = () => setShowPassword(!showPassword)

    const Icon = isPassword ? (
      <InputAdornment position='end'>
        <div onClick={handleClickShowPassword}>Password</div>
      </InputAdornment>
    ) : (
      iconName && <InputAdornment position='end'>Icon</InputAdornment>
    )

    return (
      <FormControl>
        <TextField
          ref={ref}
          variant={variant}
          size={size}
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

export default memo(MDTextField)
