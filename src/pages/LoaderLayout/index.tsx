import { ContentLayout, Card, LoaderLayout } from '../../components'

const LoaderLayoutPage = () => {
  return (
    <ContentLayout label='Loader Layout Page'>
      <Card title='Loader Layout'>
        <LoaderLayout isLoading>Content ...</LoaderLayout>
      </Card>
    </ContentLayout>
  )
}

export default LoaderLayoutPage
