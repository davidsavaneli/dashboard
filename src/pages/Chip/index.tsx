import { ContentLayout, Card, Chip } from '../../components'

const ChipPage = () => {
  return (
    <ContentLayout label='Chip Page'>
      <Card title='Chip'>
        <Chip label='Chip' onDelete={() => console.log('Delete')} />
      </Card>
    </ContentLayout>
  )
}

export default ChipPage
