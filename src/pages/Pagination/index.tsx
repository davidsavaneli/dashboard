import { ContentLayout, Card, Pagination } from '../../components'

const PaginationPage = () => {
  return (
    <ContentLayout label='Pagination Page'>
      <Card title='Pagination'>
        <Pagination count={10} />
      </Card>
    </ContentLayout>
  )
}

export default PaginationPage
