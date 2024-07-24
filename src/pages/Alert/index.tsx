import { ContentLayout, Card, Alert, Button, AlertTitle } from '../../components'

const AlertPage = () => {
  return (
    <ContentLayout label='Alert Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default'>
            <Alert>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, voluptatum pariatur corrupti quaerat ex
              voluptatibus incidunt.
            </Alert>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Action'>
            <Alert
              action={
                <Button variant='transparent' size='sm'>
                  UNDO
                </Button>
              }
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, voluptatum pariatur corrupti quaerat ex
              voluptatibus incidunt.
            </Alert>
          </Card>
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <Card title='Alert Title'>
            <Alert severity='success'>
              <AlertTitle>Success</AlertTitle>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            </Alert>
            <br />
            <Alert severity='error'>
              <AlertTitle>Success</AlertTitle>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            </Alert>
            <br />
            <Alert severity='info'>
              <AlertTitle>Success</AlertTitle>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            </Alert>
            <br />
            <Alert severity='warning'>
              <AlertTitle>Success</AlertTitle>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            </Alert>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Severity'>
            <Alert severity='success'>This is an outlined success Alert.</Alert>
            <br />
            <Alert severity='error'>This is an outlined error Alert.</Alert>
            <br />
            <Alert severity='warning'>This is an outlined warning Alert.</Alert>
            <br />
            <Alert severity='info'>This is an outlined info Alert.</Alert>
          </Card>
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <Card title='Variants'>
            <Alert variant='filled' severity='success' onClose={() => console.log('onClose')}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Alert>
            <br />
            <Alert variant='outlined' severity='success' onClose={() => console.log('onClose')}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Alert>
            <br />
            <Alert variant='standard' severity='success' onClose={() => console.log('onClose')}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Alert>
            <br />
            <Alert variant='filled' severity='error' onClose={() => console.log('onClose')}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Alert>
            <br />
            <Alert variant='outlined' severity='error' onClose={() => console.log('onClose')}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Alert>
            <br />
            <Alert variant='standard' severity='error' onClose={() => console.log('onClose')}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Alert>
            <br />
            <Alert variant='filled' severity='info' onClose={() => console.log('onClose')}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Alert>
            <br />
            <Alert variant='outlined' severity='info' onClose={() => console.log('onClose')}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Alert>
            <br />
            <Alert variant='standard' severity='info' onClose={() => console.log('onClose')}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Alert>
            <br />
            <Alert variant='filled' severity='warning' onClose={() => console.log('onClose')}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Alert>
            <br />
            <Alert variant='outlined' severity='warning' onClose={() => console.log('onClose')}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Alert>
            <br />
            <Alert variant='standard' severity='warning' onClose={() => console.log('onClose')}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Alert>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Close Button'>
            <Alert onClose={() => console.log('onClose')}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, voluptatum pariatur corrupti quaerat ex
              voluptatibus incidunt.
            </Alert>
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default AlertPage
