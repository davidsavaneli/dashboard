import { ContentLayout, Card, Title, Text, Divider } from '../../components'

const TitlePage = () => {
  return (
    <ContentLayout label='Title Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default'>
            <Title>Heading Title</Title>
            <br />
            <Text>Size: 16px / Weight: Bold / Color: Primary</Text>
          </Card>
          <br />
          <Card title='Variant'>
            <Title variant='h6'>Heading Title</Title>
            <br />
            <Text>xs / Size: 12px</Text>
            <Divider />
            <Title variant='h5'>Heading Title</Title>
            <br />
            <Text>sm / Size: 14px</Text>
            <Divider />
            <Title variant='h4'>Heading Title</Title>
            <br />
            <Text>md / Size: 16px</Text>
            <Divider />
            <Title variant='h3'>Heading Title</Title>
            <br />
            <Text>lg / Size: 20px</Text>
            <Divider />
            <Title variant='h2'>Heading Title</Title>
            <br />
            <Text>xl / Size: 24px</Text>
            <Divider />
            <Title variant='h1'>Heading Title</Title>
            <br />
            <Text>xxl / Size: 28px</Text>
          </Card>
          <br />
          <Card title='Weight'>
            <Title weight='regular'>Heading Title</Title>
            <br />
            <Text>Weight: Regular</Text>
            <Divider />
            <Title weight='medium'>Heading Title</Title>
            <br />
            <Text>Weight: Medium</Text>
            <Divider />
            <Title weight='bold'>Heading Title</Title>
            <br />
            <Text>Weight: Bold</Text>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Colors'>
            <Title color='primary'>Heading Title</Title>
            <br />
            <Text>Color: Primary</Text>
            <Divider />
            <Title color='secondary'>Heading Title</Title>
            <br />
            <Text>Color: Secondary</Text>
            <Divider />
            <Title color='dark'>Heading Title</Title>
            <br />
            <Text>Color: Dark</Text>
            <Divider />
            <Title color='medium'>Heading Title</Title>
            <br />
            <Text>Color: Medium</Text>
            <Divider />
            <Title color='light'>Heading Title</Title>
            <br />
            <Text>Color: Light</Text>
            <Divider />
            <Title color='success'>Heading Title</Title>
            <br />
            <Text>Color: Success</Text>
            <Divider />
            <Title color='error'>Heading Title</Title>
            <br />
            <Text>Color: Error</Text>
            <Divider />
            <Title color='info'>Heading Title</Title>
            <br />
            <Text>Color: Info</Text>
            <Divider />
            <Title color='warning'>Heading Title</Title>
            <br />
            <Text>Color: Warning</Text>
          </Card>
          <br />
          <Card title='Uppercase'>
            <Text uppercase>Heading Title</Text>
            <br />
            <Text>Uppercase: true</Text>
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default TitlePage
