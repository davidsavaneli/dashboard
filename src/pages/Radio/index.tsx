import { ContentLayout, Card, Radio, FormLabel, RadioGroup } from '../../components'

const RadioPage = () => {
  return (
    <ContentLayout label='Radio Page'>
      <Card title='Radio'>
        <FormLabel>Radio Group</FormLabel>
        <RadioGroup>
          <Radio label='Radio' value='male' />
          <Radio label='Radio' value='female' />
        </RadioGroup>
        <hr />
        <FormLabel>Radio Group</FormLabel>
        <RadioGroup row>
          <Radio label='Radio' value='male' />
          <Radio label='Radio' value='female' />
        </RadioGroup>
      </Card>
    </ContentLayout>
  )
}

export default RadioPage
