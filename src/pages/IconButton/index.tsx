import { ContentLayout, Card, IconButton, Text, Space } from '../../components'

const IconButtonPage = () => {
  return (
    <ContentLayout label='Icon Button Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default'>
            <IconButton iconName='Setting2' />
            <br />
            <br />
            <Text>Variant: transparent / Size: md / Color: primary</Text>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Variants'>
            <IconButton iconName='Box1' color='medium' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Box1' color='medium' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Box1' color='medium' variant='filled' />
            <br />
            <br />
            <Text>Variant: transparent / contained / filled </Text>
          </Card>
        </div>
      </div>
      <Space />
      <Card title='Colors'>
        <IconButton iconName='Bag2' variant='contained' color='primary' />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <IconButton iconName='Bag2' variant='contained' color='primaryLight' />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <IconButton iconName='Bag2' variant='contained' color='secondary' />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <IconButton iconName='Bag2' variant='contained' color='dark' />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <IconButton iconName='Bag2' variant='contained' color='medium' />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <IconButton iconName='Bag2' variant='contained' color='light' />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <IconButton iconName='Bag2' variant='contained' color='success' />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <IconButton iconName='Bag2' variant='contained' color='error' />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <IconButton iconName='Bag2' variant='contained' color='info' />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <IconButton iconName='Bag2' variant='contained' color='warning' />
        <br />
        <br />
        <Text>
          Colors: primary / primaryLight / secondary / dark / medium / light / success / error / info / warning
        </Text>
      </Card>
      <Space />
      <div className='row'>
        <div className='col-6'>
          <Card title='Rounded'>
            <IconButton iconName='Verify' color='success' rounded variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Verify' color='success' rounded variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Verify' color='success' rounded variant='filled' />
            <br />
            <br />
            <Text>rounded: true</Text>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Sizes'>
            <IconButton iconName='Bag2' variant='contained' color='warning' size='lg' />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' variant='contained' color='warning' size='md' />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' variant='contained' color='warning' size='sm' />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <br />
            <br />
            <Text>Size: lg / md / sm</Text>
          </Card>
        </div>
      </div>
      <Space />
      <div className='row'>
        <div className='col-6'>
          <Card title='Disabled'>
            <IconButton iconName='Box1' disabled />
            <br />
            <br />
            <Text>disabled: true</Text>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Loading'>
            <IconButton iconName='Setting2' color='medium' variant='contained' loading />
            <br />
            <br />
            <Text>loading: true</Text>
          </Card>
        </div>
      </div>
      <Space />
      <div className='row'>
        <div className='col-6'>
          <Card title='Tooltip'>
            <IconButton iconName='Filter' variant='filled' tooltipTitle='Tooltip Title' />
            <br />
            <br />
            <Text>tooltipTitle: string</Text>
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default IconButtonPage
