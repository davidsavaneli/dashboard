import { ContentLayout, Button } from '../../components'
import { useTheme } from '../../hooks'

const UseThemePage = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <ContentLayout label='useDarkMode Hook'>
      <Button onClick={toggleTheme}>{theme === 'light' ? 'Dark Theme' : 'Light Theme'}</Button>
    </ContentLayout>
  )
}

export default UseThemePage
