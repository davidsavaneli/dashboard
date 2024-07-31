import { ContentLayout, Card, Icon, Text, Space } from '../../components'

const IconPage = () => {
  return (
    <ContentLayout label='Icon Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default'>
            <Icon name='Box1' />
            <br />
            <br />
            <Text>Variant: Linear / Size: md / Color: primary</Text>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Sizes'>
            <Icon name='Calendar' size='lg' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon name='Calendar' size='md' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon name='Calendar' size='sm' />
            <br />
            <br />
            <Text>Size: lg / md / sm</Text>
          </Card>
        </div>
      </div>
      <Space />
      <Card title='Colors'>
        <Icon name='Verify' color='primary' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Icon name='Verify' color='primaryLight' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Icon name='Verify' color='secondary' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Icon name='Verify' color='dark' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Icon name='Verify' color='medium' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Icon name='Verify' color='light' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Icon name='Verify' color='success' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Icon name='Verify' color='error' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Icon name='Verify' color='info' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Icon name='Verify' color='warning' />
        <br />
        <br />
        <Text>
          Colors: primary / primaryLight / secondary / dark / medium / light / success / error / info / warning
        </Text>
      </Card>
      <Space />
      <Card title='Variants'>
        <Icon name='Setting2' variant='Linear' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Icon name='Setting2' variant='Outline' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Icon name='Setting2' variant='Bold' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Icon name='Setting2' variant='Bulk' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Icon name='Setting2' variant='Broken' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Icon name='Setting2' variant='TwoTone' />
        <br />
        <br />
        <Text>Variant: Linear / Outline / Bold / Bulk / Broken / TwoTone</Text>
      </Card>
    </ContentLayout>
  )
}

export default IconPage
