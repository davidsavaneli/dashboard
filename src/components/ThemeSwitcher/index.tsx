import IconButton, { IconButtonProps } from '../IconButton'
import { useTheme } from '../../hooks'

export interface ThemeSwitcherProps {
  color?: IconButtonProps['color']
  rounded?: IconButtonProps['rounded']
  variant?: IconButtonProps['variant']
}

const ThemeSwitcher = ({ color = 'primary', rounded = false, variant = 'filled' }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <IconButton
      iconName={theme === 'dark' ? 'Sun1' : 'Moon'}
      iconVariant='Bulk'
      variant={variant}
      color={color}
      rounded={rounded}
      onClick={toggleTheme}
    />
  )
}

export default ThemeSwitcher
