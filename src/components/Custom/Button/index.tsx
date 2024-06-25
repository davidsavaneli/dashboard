import { forwardRef } from 'react'
import { MuiButton, MuiButtonProps } from '../../Mui'

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    filled: true
  }

  interface ButtonPropsColorOverrides {
    dark: true
    medium: true
  }
}

export interface ButtonProps extends MuiButtonProps {
  variant?: 'contained' | 'outlined' | 'filled' | 'text'
  color?: 'dark' | 'medium'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'contained', color, ...props }: ButtonProps, ref) => {
    return <MuiButton variant={variant} {...props} ref={ref} />
  },
)

export default Button
