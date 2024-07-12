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
            <Text>Variant: Linear / Size: md / Color: Primary</Text>
          </Card>
          <br />
          <Card title='Variant'>
            <Icon name='Setting2' variant='Linear' />
            <br />
            <br />
            <Text>Variant: Linear</Text>
            <Divider />
            <Icon name='Setting2' variant='Outline' />
            <br />
            <br />
            <Text>Variant: Outline</Text>
            <Divider />
            <Icon name='Setting2' variant='Bold' />
            <br />
            <br />
            <Text>Variant: Bold</Text>
            <Divider />
            <Icon name='Setting2' variant='Bulk' />
            <br />
            <br />
            <Text>Variant: Bulk</Text>
            <Divider />
            <Icon name='Setting2' variant='Broken' />
            <br />
            <br />
            <Text>Variant: Broken</Text>
            <Divider />
            <Icon name='Setting2' variant='TwoTone' />
            <br />
            <br />
            <Text>Variant: TwoTone</Text>
          </Card>
          <br />
          <Card title='Sizes'>
            <Icon name='Calendar' size='sm' />
            <br />
            <br />
            <Text>Size: sm</Text>
            <Divider />
            <Icon name='Calendar' size='md' />
            <br />
            <br />
            <Text>Size: md</Text>
            <Divider />
            <Icon name='Calendar' size='lg' />
            <br />
            <br />
            <Text>Size: lg</Text>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Colors'>
            <Icon name='Bag2' color='primary' />
            <br />
            <br />
            <Text>Color: Primary</Text>
            <Divider />
            <Icon name='Bag2' color='primaryLight' />
            <br />
            <br />
            <Text>Color: PrimaryLight</Text>
            <Divider />
            <Icon name='Bag2' color='secondary' />
            <br />
            <br />
            <Text>Color: Secondary</Text>
            <Divider />
            <Icon name='Bag2' color='dark' />
            <br />
            <br />
            <Text>Color: Dark</Text>
            <Divider />
            <Icon name='Bag2' color='medium' />
            <br />
            <br />
            <Text>Color: Medium</Text>
            <Divider />
            <Icon name='Bag2' color='light' />
            <br />
            <br />
            <Text>Color: Light</Text>
            <Divider />
            <Icon name='Bag2' color='success' />
            <br />
            <br />
            <Text>Color: Success</Text>
            <Divider />
            <Icon name='Bag2' color='error' />
            <br />
            <br />
            <Text>Color: Error</Text>
            <Divider />
            <Icon name='Bag2' color='info' />
            <br />
            <br />
            <Text>Color: Info</Text>
            <Divider />
            <Icon name='Bag2' color='warning' />
            <br />
            <br />
            <Text>Color: Warning</Text>
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default IconPage
