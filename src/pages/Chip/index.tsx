import { ContentLayout, Card, Chip } from '../../components'

const ChipPage = () => {
  return (
    <ContentLayout label='Chip Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default'>
            <Chip label='Default' />
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Default'>
            <Chip label='Default' onDelete={() => console.log('onDelete')} />
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default ChipPage
