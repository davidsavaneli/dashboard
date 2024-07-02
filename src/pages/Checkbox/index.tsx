import { ContentLayout, Card, Checkbox, FormLabel, FormGroup } from '../../components'

const CheckboxPage = () => {
  return (
    <ContentLayout label='Checkbox Page'>
      <Card title='Checkbox'>
        <Checkbox label='Checkbox' />
        <hr />
        <FormLabel>Checkbox Group</FormLabel>
        <FormGroup>
          <Checkbox label='Checkbox' />
          <Checkbox label='Checkbox' />
        </FormGroup>
        <hr />
        <FormLabel>Checkbox Group</FormLabel>
        <FormGroup row>
          <Checkbox label='Checkbox' />
          <Checkbox label='Checkbox' />
        </FormGroup>
      </Card>
    </ContentLayout>
  )
}

export default CheckboxPage
