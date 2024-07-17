import { ContentLayout, Card, Select } from '../../components'

const selectOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
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
      <Card title='Errors'>
        <Select label='Label' options={selectOptions} error />
        <Select label='Label' options={selectOptions} error helperText='Helper Text' />
      </Card>
    </ContentLayout>
  )
}

export default SelectPage
