import { ContentLayout, Card, Text, Space } from '../../components'

const TextPage = () => {
  return (
    <ContentLayout label='Text Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default'>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam maiores, sapiente minima voluptate quisquam
              exercitationem earum sequi explicabo, dicta ducimus cumque officia laudantium quibusdam. Fugiat animi id
              delectus ipsa iure.
            </Text>
            <br />
            <Text>Size: sm / Font Size: 14px / Weight: regular / Color: primaryLight</Text>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Uppercase'>
            <Text uppercase>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam maiores, sapiente minima voluptate quisquam
              exercitationem earum sequi explicabo, dicta ducimus cumque officia laudantium quibusdam. Fugiat animi id
              delectus ipsa iure.
            </Text>
            <br />
            <Text>uppercase: true</Text>
          </Card>
        </div>
      </div>
      <Space />
      <Card title='Colors'>
        <Text color='primary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
        <br />
        <Text color='primaryLight'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
        <br />
        <Text color='secondary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
        <br />
        <Text color='dark'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
        <br />
        <Text color='medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
        <br />
        <Text color='light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
        <br />
        <Text color='success'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
        <br />
        <Text color='error'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
        <br />
        <Text color='info'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
        <br />
        <Text color='warning'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
        <br />
        <Text>
          Colors: primary / primaryLight / secondary / dark / medium / light / success / error / info / warning
        </Text>
      </Card>
      <Space />
      <div className='row'>
        <div className='col-6'>
          <Card title='Sizes'>
            <Text size='xxl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
            <br />
            <Text size='xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
            <br />
            <Text size='lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
            <br />
            <Text size='md'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
            <br />
            <Text size='sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
            <br />
            <Text size='xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
            <br />
            <Text>Variant: xxl / xl / lg / md / sm / xs</Text>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Weight'>
            <Text weight='bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
            <br />
            <Text weight='medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
            <br />
            <Text weight='regular'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
            <br />
            <Text>Weight: bold / medium / regular</Text>
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default TextPage
