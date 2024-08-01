import { ContentLayout, Card, NoData } from '../../components'

const NoDataPage = () => {
  return (
    <ContentLayout label='No Data Component'>
    <Card title='No Data'>
      <NoData text='Results Not Found' />
    </Card>
    </ContentLayout>
  )
}

export default NoDataPage
