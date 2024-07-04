import { ContentLayout, Card, Text } from '../../components'

const TextPage = () => {
  return (
    <ContentLayout label='Text Page'>
      <Card title='Text'>
        <Text size='xxl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        <Text size='xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        <Text size='lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        <Text size='md'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        <Text size='sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        <Text size='xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        <br />
        <Text color='primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        <Text color='secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        <Text color='dark'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        <Text color='medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        <Text color='light'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        <Text color='success'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        <Text color='error'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        <Text color='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        <Text color='warning'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        <br />
        <Text weight='light'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        <Text weight='medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        <Text weight='bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        <br />
        <Text uppercase>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      </Card>
    </ContentLayout>
  )
}

export default TextPage
