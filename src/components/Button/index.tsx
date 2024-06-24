import { forwardRef } from 'react'
import Button, { ButtonProps } from '@mui/material/Button'

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    filled: true
  }

  interface ButtonPropsColorOverrides {
    dark: true
    medium: true
  }
}

export type MDButtonProps = {
  variant?: 'contained' | 'outlined' | 'filled' | 'text'
  color?: 'dark' | 'medium'
} & Omit<ButtonProps, 'color' | 'variant'>

const MDButton = forwardRef<HTMLButtonElement, MDButtonProps>(({ variant = 'contained', color, ...props }, ref) => {
  return <Button variant={variant} {...props} ref={ref} />
})

export default MDButton
