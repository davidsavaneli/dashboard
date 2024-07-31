import { ContentLayout, Card, TextField, Icon, Space } from '../../components'

const TextFieldPage = () => {
  return (
    <ContentLayout label='Text Field Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default'>
            <TextField label='Label' />
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Password'>
            <TextField label='Password' isPassword />
          </Card>
        </div>
      </div>
      <Space />
      <div className='row'>
        <div className='col-6'>
          <Card title='Icon Button'>
            <TextField label='Icon Button' iconButtonName='Trash' />
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Icon'>
            <TextField label='Icon' iconName='Trash' />
          </Card>
        </div>
      </div>
      <Space />
      <div className='row'>
        <div className='col-6'>
          <Card title='Icon Adornment Position'>
            <TextField label='Start' adornmentPosition='start' iconButtonName='Trash' />
            <TextField label='End' adornmentPosition='end' iconButtonName='Trash' />
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Adornment Position'>
            <TextField
              label='Start'
              InputProps={{
                startAdornment: 'https://',
              }}
            />
            <TextField
              label='End'
              InputProps={{
                endAdornment: '.com',
              }}
            />
          </Card>
        </div>
      </div>
      <Space />
      <div className='row'>
        <div className='col-6'>
          <Card title='Helper Text'>
            <TextField label='Label' helperText='Helper Text' />
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Placeholder'>
            <TextField label='Label' placeholder='Placeholder Text' />
          </Card>
        </div>
      </div>
      <Space />
      <Card title='Multiline'>
        <TextField label='Multiline' multiline rows={4} />
      </Card>
      <Space />
      <div className='row'>
        <div className='col-6'>
          <Card title='Disabled'>
            <TextField label='Label' value='David Savaneli' disabled />
            <TextField label='Icon Button' iconButtonName='Trash' disabled />
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Errors'>
            <TextField label='Label' value='David Savaneli' error />
            <TextField label='Label' value='David Savaneli' error helperText='Incorrect entry.' />
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default TextFieldPage
