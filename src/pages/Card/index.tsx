import { ContentLayout, Card, IconButton, Icon, Button } from '../../components'

const CardPage = () => {
  return (
    <ContentLayout label='Card Page'>
      <div className='row'>
        <div className='col-6'>
          <Card
            title='Card 1'
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
        <div className='col-6'>
          <Card title='Card 2'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic molestiae ex molestias adipisci quidem quos
            modi eligendi impedit reprehenderit tempore voluptates tempora nostrum quibusdam temporibus id fugiat sunt,
            odio unde.
          </Card>
        </div>
      </div>
      <Card title='Card 3'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic molestiae ex molestias adipisci quidem quos modi
        eligendi impedit reprehenderit tempore voluptates tempora nostrum quibusdam temporibus id fugiat sunt, odio
        unde.
      </Card>
    </ContentLayout>
  )
}

export default CardPage
