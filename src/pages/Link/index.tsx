import { ContentLayout, Card, Link } from '../../components'

const LinkPage = () => {
  return (
    <ContentLayout label='Link Page'>
      <Card title='Link'>
        <Link href='/button'>Link (go to button page)</Link>
      </Card>
    </ContentLayout>
  )
}

export default LinkPage
