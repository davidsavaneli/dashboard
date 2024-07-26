import { ContentLayout, Card, Link } from '../../components'

const LinkPage = () => {
  return (
    <ContentLayout label='Link Page'>
      <Card title='Link'>
        <Link href='/'>Go To Dashboard</Link>
      </Card>
    </ContentLayout>
  )
}

export default LinkPage
