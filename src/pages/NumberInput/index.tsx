import { ContentLayout, Card, NumberInput } from '../../components'

const NumberInputPage = () => {
  return (
    <ContentLayout label='Number Input Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default'>
            <NumberInput />
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Min - 5 / Max - 10'>
            <NumberInput  max={10} min={5} value={7} />
          </Card>
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default Value 10'>
            <NumberInput label='Label' max={1000} value={10} />
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Disabled'>
            <NumberInput label='Label' max={10} disabled value={10} />
          </Card>
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <Card title='Errors'>
            <NumberInput label='Label' max={1000} value={0} error />
            <NumberInput label='Label' max={1000} value={0} error helperText='Incorrect entry.' />
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default NumberInputPage
