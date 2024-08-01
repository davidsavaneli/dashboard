import IconButton, { IconButtonProps } from '../IconButton'
import { useDarkModeContext } from '../../hooks'

export interface ThemeSwitcherProps {
  color?: IconButtonProps['color']
  rounded?: IconButtonProps['rounded']
  variant?: IconButtonProps['variant']
}

const ThemeSwitcher = ({ color = 'primary', rounded = false, variant = 'filled' }: ThemeSwitcherProps) => {
  const { darkMode, toggleDarkMode } = useDarkModeContext()

  return (
    <IconButton
      iconName={darkMode ? 'Sun1' : 'Moon'}
      iconVariant='Bulk'
      variant={variant}
      color={color}
      rounded={rounded}
      onClick={toggleDarkMode}
    />
  )
}

export default ThemeSwitcher
