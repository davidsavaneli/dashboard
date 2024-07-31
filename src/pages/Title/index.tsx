import { ContentLayout, Card, Title, Text, Divider, Space } from '../../components'

const TitlePage = () => {
  return (
    <ContentLayout label='Title Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default'>
            <Title>Default Title</Title>
            <br />
            <Text>Variant: h4 / Font Size: 16px / Weight: bold / Color: primary</Text>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Uppercase'>
            <Title uppercase>Uppercase Title</Title>
            <br />
            <Text>uppercase: true</Text>
          </Card>
        </div>
      </div>
      <Space />
      <Card title='Colors'>
        <Title color='primary'>Heading Title Primary</Title>
        <br />
        <Title color='primaryLight'>Heading Title Primary Light</Title>
        <br />
        <Title color='secondary'>Heading Title Secondary</Title>
        <br />
        <Title color='dark'>Heading Title Dark</Title>
        <br />
        <Title color='medium'>Heading Title Medium</Title>
        <br />
        <Title color='light'>Heading Title Light</Title>
        <br />
        <Title color='success'>Heading Title Success</Title>
        <br />
        <Title color='error'>Heading Title Error</Title>
        <br />
        <Title color='info'>Heading Title Info</Title>
        <br />
        <Title color='warning'>Heading Title Warning</Title>
        <br />
        <Text>
          Colors: primary / primaryLight / secondary / dark / medium / light / success / error / info / warning
        </Text>
      </Card>
      <Space />
      <div className='row'>
        <div className='col-6'>
          <Card title='Variants'>
            <Title variant='h1'>Heading Title h1</Title>
            <br />
            <Title variant='h2'>Heading Title h2</Title>
            <br />
            <Title variant='h3'>Heading Title h3</Title>
            <br />
            <Title variant='h4'>Heading Title h4</Title>
            <br />
            <Title variant='h5'>Heading Title h5</Title>
            <br />
            <Title variant='h6'>Heading Title h6</Title>
            <br />
            <Text>Variant: h1 / h2 / h3 / h4 / h5 / h6</Text>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Weight'>
            <Title weight='bold'>Heading Title Bold</Title>
            <br />
            <Title weight='medium'>Heading Title Medium</Title>
            <br />
            <Title weight='regular'>Heading Title Regular</Title>
            <br />
            <Text>Weight: bold / medium / regular</Text>
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default TitlePage
