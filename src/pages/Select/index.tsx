import { ContentLayout, Card, Select } from '../../components'

const selectOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
]

const SelectPage = () => {
  return (
    <ContentLayout label='Select Page'>
      <Card title='Select'>
        <Select label={'Select'} options={selectOptions} onValueChange={(e) => console.log(e)} multiple />
      </Card>
    </ContentLayout>
  )
}

export default SelectPage
