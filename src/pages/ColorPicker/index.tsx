import { ContentLayout, Card, ColorPicker } from '../../components'

const ColorPickerPage = () => {
  return (
    <ContentLayout label='Color Picker Page'>
      <Card title='Color Picker'>
        <ColorPicker label='Color Picker' onChange={(e) => console.log(e)} />
      </Card>
    </ContentLayout>
  )
}

export default ColorPickerPage
