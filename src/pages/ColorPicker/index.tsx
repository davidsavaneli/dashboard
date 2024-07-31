import { ContentLayout, Card, ColorPicker, Space } from '../../components'

const ColorPickerPage = () => {
  return (
    <ContentLayout label='Color Picker Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default'>
            <ColorPicker label='Color Picker' onChange={(e) => console.log(e)} />
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Disabled'>
            <ColorPicker label='Color Picker' disabled />
          </Card>
        </div>
      </div>
      <Space />
      <div className='row'>
        <div className='col-6'>
          <Card title='Errors'>
            <ColorPicker label='Color Picker' error />
            <ColorPicker label='Color Picker' error helperText='Helper Text' />
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default ColorPickerPage
