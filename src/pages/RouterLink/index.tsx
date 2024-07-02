import { ContentLayout, Card, RouterLink } from '../../components'

const RouterLinkPage = () => {
  return (
    <ContentLayout label='Router Link Page'>
      <Card title='Router Link'>
        <RouterLink to='/button'>RouterLink (go to button page)</RouterLink>
      </Card>
    </ContentLayout>
  )
}

export default RouterLinkPage
