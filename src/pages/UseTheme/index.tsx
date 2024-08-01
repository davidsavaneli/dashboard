import { ContentLayout, Button } from '../../components'
import { useUIContext } from '../../contexts'

const UseThemePage = () => {
  const { theme, toggleTheme } = useUIContext()

  return (
    <ContentLayout label='useDarkMode Hook'>
      <Button onClick={toggleTheme}>{theme === 'light' ? 'Dark Theme' : 'Light Theme'}</Button>
    </ContentLayout>
  )
}

export default UseThemePage
