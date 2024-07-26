import { ContentLayout, Card, Button } from '../../components'
import { useTheme } from '../../hooks'

const UseThemePage = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <ContentLayout label='useDarkMode Hook'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default'>
            <Button onClick={toggleTheme}>{theme === 'light' ? 'Dark Theme' : 'Light Theme'}</Button>
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default UseThemePage
