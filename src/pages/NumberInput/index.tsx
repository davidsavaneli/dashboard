import { ContentLayout, Card, NumberInput } from '../../components'

const NumberInputPage = () => {
  return (
    <ContentLayout label='Number Input Page'>
      <Card title='Number Input'>
        <NumberInput max={5} value={0} onValueChange={(e) => console.log(e)} />
      </Card>
    </ContentLayout>
  )
}

export default NumberInputPage
