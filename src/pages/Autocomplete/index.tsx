import { ContentLayout, Card, Autocomplete } from '../../components'

const autocompleteOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
]

const AutocompletePage = () => {
  return (
    <ContentLayout label='Autocomplete Page'>
      <Card title='Autocomplete'>
        <Autocomplete multiple options={autocompleteOptions} label='Autocomplete' onChange={(e) => console.log(e)} />
      </Card>
    </ContentLayout>
  )
}

export default AutocompletePage
