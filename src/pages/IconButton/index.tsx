import { ContentLayout, Card, IconButton, Title, Text, Divider, Button } from '../../components'

const IconButtonPage = () => {
  return (
    <ContentLayout label='Icon Button Component'>
      <Card title='Default'>
        <IconButton iconName='Setting2' />
        <Divider />
        <Text>Variant: transparent / Size: md / Color: primary</Text>
      </Card>
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
        <Divider />
        <Text>
          Colors: primary / primaryLight / secondary / dark / medium / light / success / error / info / warning
        </Text>
      </Card>
      <Card title='Variants'>
        <IconButton iconName='Box1' color='medium' variant='transparent' />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <IconButton iconName='Box1' color='medium' variant='contained' />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <IconButton iconName='Box1' color='medium' variant='filled' />
        <Divider />
        <Text>Variant: transparent / contained / filled </Text>
      </Card>
      <Card title='Rounded'>
        <IconButton iconName='Verify' color='success' rounded variant='transparent' />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <IconButton iconName='Verify' color='success' rounded variant='contained' />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <IconButton iconName='Verify' color='success' rounded variant='filled' />
        <Divider />
        <Text>rounded: true</Text>
      </Card>
      <Card title='Sizes'>
        <IconButton iconName='Bag2' variant='contained' color='warning' size='lg' />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <IconButton iconName='Bag2' variant='contained' color='warning' size='md' />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <IconButton iconName='Bag2' variant='contained' color='warning' size='sm' />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Divider />
        <Text>Size: lg / md / sm</Text>
      </Card>
      <Card title='Disabled'>
        <IconButton iconName='Box1' disabled />
        <Divider />
        <Text>disabled: true</Text>
      </Card>
      <Card title='Loading'>
        <IconButton iconName='Setting2' color='medium' variant='contained' loading />
        <Divider />
        <Text>loading: true</Text>
      </Card>
      <Card title='Tooltip'>
        <IconButton iconName='Filter' variant='filled' tooltipTitle='Tooltip Title' />
        <Divider />
        <Text>tooltipTitle: string</Text>
      </Card>
    </ContentLayout>
  )
}

export default IconButtonPage
