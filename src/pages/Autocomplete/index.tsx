import { ContentLayout, Card, Autocomplete, Space } from '../../components'

const autocompleteOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
]

const AutocompletePage = () => {
  return (
    <ContentLayout label='Autocomplete Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default'>
            <Autocomplete label='Label' options={autocompleteOptions} onChange={(e, value) => console.log(value)} />
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Multiple'>
            <Autocomplete
              label='Label'
              options={autocompleteOptions}
              multiple
              onChange={(e, value) => console.log(value)}
            />
          </Card>
        </div>
      </div>
      <Space />
      <div className='row'>
        <div className='col-6'>
          <Card title='Helper Text'>
            <Autocomplete
              label='Label'
              options={autocompleteOptions}
              helperText='Helper Text'
              onChange={(e, value) => console.log(value)}
            />
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Disabled'>
            <Autocomplete
              label='Label'
              options={autocompleteOptions}
              disabled
              onChange={(e, value) => console.log(value)}
            />
          </Card>
        </div>
      </div>
      <Space />
      <div className='row'>
        <div className='col-6'>
          <Card title='Errors'>
            <Autocomplete
              label='Label'
              options={autocompleteOptions}
              error
              onChange={(e, value) => console.log(value)}
            />
            <Autocomplete
              label='Label'
              options={autocompleteOptions}
              error
              helperText='Helper Text'
              onChange={(e, value) => console.log(value)}
            />
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default AutocompletePage
