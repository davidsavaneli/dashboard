import { forwardRef, useState } from 'react'
import { MuiTextField, MuiTextFieldProps } from '../../Mui'
import FormControl from '../FormControl'
import InputAdornment from '../InputAdornment'
import FormLabel from '../FormLabel'
import IconButton from '../IconButton'
import { IconName } from '../Icon'
import clsx from 'clsx'

import './styles.css'

export type TextFieldProps = MuiTextFieldProps & {
  isPassword?: boolean
  iconName?: IconName
  iconButtonName?: IconName
  adornmentPosition?: 'start' | 'end'
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      isPassword = false,
      iconName,
      iconButtonName,
      variant = 'outlined',
      label,
      adornmentPosition = 'end',
      disabled = false,
      ...props
    }: TextFieldProps,
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState<boolean>(!!isPassword)
    const handleShowPassword = () => setShowPassword(!showPassword)

    const classNames = clsx({
      ['MuiTextField-withIcon']: iconName || iconButtonName || isPassword,
    })

    const IconComponent = isPassword ? (
      <InputAdornment position={adornmentPosition}>
        <IconButton disabled={disabled} onClick={handleShowPassword} iconName={showPassword ? 'EyeSlash' : 'Eye'} />
      </InputAdornment>
    ) : (
      (iconName || iconButtonName) && (
        <div>
          {iconName ? (
            <InputAdornment position={adornmentPosition}>
              <IconButton disabled={disabled} iconName={iconName} nonClickable />
            </InputAdornment>
          ) : (
            iconButtonName && (
              <InputAdornment position={adornmentPosition}>
                <IconButton disabled={disabled} iconName={iconButtonName} />
              </InputAdornment>
            )
          )}
        </div>
      )
    )

    return (
      <FormControl>
        {label && <FormLabel>{label}</FormLabel>}
        <MuiTextField
          className={classNames}
          ref={ref}
          variant={variant}
          disabled={disabled}
          type={!showPassword ? 'text' : 'password'}
          InputProps={{
            [`${adornmentPosition}Adornment`]: IconComponent,
          }}
          {...props}
        />
      </FormControl>
    )
  },
)

export default TextField
