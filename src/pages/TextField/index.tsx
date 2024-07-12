import { ContentLayout, Card, TextField, Icon } from '../../components'

const TextFieldPage = () => {
  return (
    <ContentLayout label='Text Field Page'>
      <Card title='Text Field'>
        <TextField label='Text Field' />
        <TextField label='Password' isPassword fullWidth />
        <TextField label='With Icon' iconButtonName='Trash' />
        <TextField label='With Icon  sdsdsdsd' iconButtonName='Trash' adornmentPosition='start' />
        <TextField label='With Icon' iconName='Trash' />
        <TextField label='With Icon' iconButtonName='Trash' adornmentPosition='start' />
        <TextField label='With Icon' iconName='Trash' adornmentPosition='end' />
        <TextField
          label='Text Field'
          InputProps={{
            startAdornment: 'https://',
          }}
        />
        <TextField
          label='Text Field'
          InputProps={{
            endAdornment: '.com',
          }}
        />
      </Card>
    </ContentLayout>
  )
}

export default TextFieldPage
