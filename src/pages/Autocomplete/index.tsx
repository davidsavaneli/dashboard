import { ContentLayout, Card, Autocomplete } from '../../components'

const autocompleteOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
]

const AutocompletePage = () => {
  return (
    <ContentLayout label='Autocomplete Component'>
      <Card title='Autocomplete'>
        <Autocomplete open multiple options={autocompleteOptions} label='Autocomplete' onChange={(e) => console.log(e)} loading />
      </Card>
    </ContentLayout>
  )
}

export default AutocompletePage
