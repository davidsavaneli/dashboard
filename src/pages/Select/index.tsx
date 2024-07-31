import { ContentLayout, Card, Select, Space } from '../../components'

const selectOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
  { value: 'option5', label: 'Option 5' },
  { value: 'option6', label: 'Option 6' },
]

const SelectPage = () => {
  return (
    <ContentLayout label='Select Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default'>
            <Select label='Label' options={selectOptions} />
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Multiple'>
            <Select label='Label' options={selectOptions} multiple />
          </Card>
        </div>
      </div>
      <Space />
      <div className='row'>
        <div className='col-6'>
          <Card title='Helper Text'>
            <Select label='Label' options={selectOptions} helperText='Helper Text' />
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Disabled'>
            <Select label='Label' options={selectOptions} disabled />
          </Card>
        </div>
      </div>
      <Space />
      <div className='row'>
        <div className='col-6'>
          <Card title='Errors'>
            <Select label='Label' options={selectOptions} error />
            <Select label='Label' options={selectOptions} error helperText='Helper Text' />
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default SelectPage
