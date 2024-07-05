import { ContentLayout, Card, TextField, Icon } from '../../components'

const TextFieldPage = () => {
  return (
    <ContentLayout label='Text Field Page'>
      <Card title='Text Field'>
        <TextField label='Text Field' />
        <br />
        <br />
        <TextField label='Password' isPassword fullWidth />
        <br />
        <br />
        <TextField label='With Icon' iconName='Trash' />
      </Card>
    </ContentLayout>
  )
}

export default TextFieldPage
