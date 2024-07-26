import { ContentLayout, Card, NumberInput } from '../../components'

const NumberInputPage = () => {
  return (
    <ContentLayout label='Number Input Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default'>
            <NumberInput label='Label' max={1000} value={0} onValueChange={(e) => console.log(e)} />
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Min - 5 / Max - 10'>
            <NumberInput label='Label' max={10} min={5} value={0} onValueChange={(e) => console.log(e)} />
          </Card>
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default Value 10'>
            <NumberInput label='Label' max={1000} value={10} onValueChange={(e) => console.log(e)} />
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Disabled'>
            <NumberInput label='Label' max={10} disabled value={10} onValueChange={(e) => console.log(e)} />
          </Card>
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <Card title='Errors'>
            <NumberInput label='Label' max={1000} value={0} onValueChange={(e) => console.log(e)} error />
            <NumberInput
              label='Label'
              max={1000}
              value={0}
              onValueChange={(e) => console.log(e)}
              error
              helperText='Incorrect entry.'
            />
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default NumberInputPage
