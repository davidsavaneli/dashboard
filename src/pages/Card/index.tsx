import { ContentLayout, Card, IconButton, Menu, Button, Space } from '../../components'

const CardPage = () => {
  return (
    <ContentLayout label='Card Component'>
      <div className='row'>
        <div className='col-6'>
          <Card
            collapse
            title='Collapse Card'
            headerActions={
              <Menu
                component={<IconButton iconName='More' />}
                items={[
                  {
                    children: 'Today',
                  },
                  {
                    children: 'Weekly',
                  },
                  {
                    children: 'Monthly',
                  },
                ]}
              />
            }
            footerActions={
              <>
                <Button variant='transparent'>Cancel</Button>
                <Button onClick={() => console.log('Submit')}>Submit</Button>
              </>
            }
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic molestiae ex molestias adipisci quidem quos
            modi eligendi impedit reprehenderit tempore voluptates tempora nostrum quibusdam temporibus id fugiat sunt,
            odio unde.
          </Card>
        </div>
      </div>
      <Space />
      <div className='row'>
        <div className='col-6'>
          <Card title='Default'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic molestiae ex molestias adipisci quidem quos
            modi eligendi impedit reprehenderit tempore voluptates tempora nostrum quibusdam temporibus id fugiat sunt,
            odio unde.
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Header Actions' icon='Wallet3' headerActions={<IconButton iconName='More' />}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic molestiae ex molestias adipisci quidem quos
            modi eligendi impedit reprehenderit tempore voluptates tempora nostrum quibusdam temporibus id fugiat sunt,
            odio unde.
          </Card>
        </div>
      </div>
      <Space />
      <div className='row'>
        <div className='col-6'>
          <Card title='Footer Actions' footerActions={<Button>Submit</Button>}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic molestiae ex molestias adipisci quidem quos
            modi eligendi impedit reprehenderit tempore voluptates tempora nostrum quibusdam temporibus id fugiat sunt,
            odio unde.
          </Card>
        </div>
        <div className='col-6'>
          <Card
            title='Other'
            headerActions={<IconButton iconName='More' />}
            footerActions={
              <>
                <Button variant='transparent'>Cancel</Button>
                <Button>Submit</Button>
              </>
            }
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic molestiae ex molestias adipisci quidem quos
            modi eligendi impedit reprehenderit tempore voluptates tempora nostrum quibusdam temporibus id fugiat sunt,
            odio unde.
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default CardPage
