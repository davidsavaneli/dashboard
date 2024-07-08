import { ContentLayout, Card, Icon, Text, Divider } from '../../components'

const IconPage = () => {
  return (
    <ContentLayout label='Icon Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default'>
            <Icon name='Box1' variant='Linear' />
            <br />
            <br />
            <Text color='primaryLight'>Variant: Linear / Size: md / Color: Primary</Text>
          </Card>
          <br />
          <Card title='Variant'>
            <Icon name='Setting2' variant='Linear' />
            <br />
            <br />
            <Text color='primaryLight'>Variant: Linear</Text>
            <Divider />
            <Icon name='Setting2' variant='Outline' />
            <br />
            <br />
            <Text color='primaryLight'>Variant: Outline</Text>
            <Divider />
            <Icon name='Setting2' variant='Bold' />
            <br />
            <br />
            <Text color='primaryLight'>Variant: Bold</Text>
            <Divider />
            <Icon name='Setting2' variant='Bulk' />
            <br />
            <br />
            <Text color='primaryLight'>Variant: Bulk</Text>
            <Divider />
            <Icon name='Setting2' variant='Broken' />
            <br />
            <br />
            <Text color='primaryLight'>Variant: Broken</Text>
            <Divider />
            <Icon name='Setting2' variant='TwoTone' />
            <br />
            <br />
            <Text color='primaryLight'>Variant: TwoTone</Text>
          </Card>
          <br />
          <Card title='Sizes'>
            <Icon name='Calendar' size='sm' />
            <br />
            <br />
            <Text color='primaryLight'>Size: sm</Text>
            <Divider />
            <Icon name='Calendar' size='md' />
            <br />
            <br />
            <Text color='primaryLight'>Size: md</Text>
            <Divider />
            <Icon name='Calendar' size='lg' />
            <br />
            <br />
            <Text color='primaryLight'>Size: lg</Text>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Colors'>
            <Icon name='Bag2' color='primary' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Primary</Text>
            <Divider />
            <Icon name='Bag2' color='primaryLight' />
            <br />
            <br />
            <Text color='primaryLight'>Color: PrimaryLight</Text>
            <Divider />
            <Icon name='Bag2' color='secondary' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Secondary</Text>
            <Divider />
            <Icon name='Bag2' color='dark' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Dark</Text>
            <Divider />
            <Icon name='Bag2' color='medium' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Medium</Text>
            <Divider />
            <Icon name='Bag2' color='light' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Light</Text>
            <Divider />
            <Icon name='Bag2' color='success' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Success</Text>
            <Divider />
            <Icon name='Bag2' color='error' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Error</Text>
            <Divider />
            <Icon name='Bag2' color='info' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Info</Text>
            <Divider />
            <Icon name='Bag2' color='warning' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Warning</Text>
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default IconPage
