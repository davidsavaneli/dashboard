import { ContentLayout, Card, Title } from '../../components'

const TitlePage = () => {
  return (
    <ContentLayout label='Title Page'>
      <Card title='Title'>
        <Title variant='h1'>Title h1</Title>
        <Title variant='h2'>Title h2</Title>
        <Title variant='h3'>Title h3</Title>
        <Title variant='h4'>Title h4</Title>
        <Title variant='h5'>Title h5</Title>
        <Title variant='h6'>Title h6</Title>
        <br />
        <Title color='primary'>Title h5</Title>
        <Title color='secondary'>Title h5</Title>
        <Title color='dark'>Title h5</Title>
        <Title color='medium'>Title h5</Title>
        <Title color='light'>Title h5</Title>
        <Title color='success'>Title h5</Title>
        <Title color='error'>Title h5</Title>
        <Title color='info'>Title h5</Title>
        <Title color='warning'>Title h5</Title>
        <br />
        <Title weight='light'>Light</Title>
        <Title weight='medium'>Medium</Title>
        <Title weight='bold'>Bold</Title>
        <br />
        <Title uppercase>Uppercase</Title>
      </Card>
    </ContentLayout>
  )
}

export default TitlePage
