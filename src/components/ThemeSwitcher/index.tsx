import IconButton, { IconButtonProps } from '../IconButton'
import { useTheme } from '../../hooks'

export interface ThemeSwitcherProps {
  color?: IconButtonProps['color']
}

const ThemeSwitcher = ({ color = 'primary' }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <IconButton
      iconName={theme === 'dark' ? 'Sun1' : 'Moon'}
      iconVariant='Bulk'
      variant='filled'
      color={color}
      onClick={toggleTheme}
    />
  )
}

export default ThemeSwitcher
