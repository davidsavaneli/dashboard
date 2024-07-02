import { ContentLayout, Card, Breadcrumbs } from '../../components'

const BreadcrumbsPage = () => {
  return (
    <ContentLayout label='Breadcrumbs Page'>
      <Card title='Breadcrumbs'>
        <Breadcrumbs
          breadcrumbs={[
            {
              label: 'Home',
              to: '/',
            },
            {
              label: 'components',
              to: '/components',
            },
            {
              label: 'breadcrumbs',
              to: '/components/breadcrumbs',
            },
          ]}
        />
      </Card>
    </ContentLayout>
  )
}

export default BreadcrumbsPage
