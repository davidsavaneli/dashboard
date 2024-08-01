import { ContentLayout, Button } from '../../components'
import { useDarkModeContext } from '../../hooks'

const UseThemePage = () => {
  const { darkMode, toggleDarkMode } = useDarkModeContext()

  return (
    <ContentLayout label='useDarkMode Hook'>
      <Button onClick={toggleDarkMode}>{darkMode ? 'Dark Theme' : 'Light Theme'}</Button>
    </ContentLayout>
  )
}

export default UseThemePage
