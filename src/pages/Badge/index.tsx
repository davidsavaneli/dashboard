import { ContentLayout, Card, Badge, Button } from '../../components'

const BadgePage = () => {
  return (
    <ContentLayout label='Badge Page'>
      <Card title='Badge'>
        <Badge color='secondary' badgeContent={2}>
          <Button>Badge</Button>
        </Badge>
      </Card>
    </ContentLayout>
  )
}

export default BadgePage
