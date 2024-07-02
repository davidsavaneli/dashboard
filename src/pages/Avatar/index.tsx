import { ContentLayout, Card, Avatar } from '../../components'

const AvatarPage = () => {
  return (
    <ContentLayout label='Avatar Page'>
      <Card title='Avatar'>
        <Avatar src='https://picsum.photos/200/200'></Avatar>
      </Card>
    </ContentLayout>
  )
}

export default AvatarPage
