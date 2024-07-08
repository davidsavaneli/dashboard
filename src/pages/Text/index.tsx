import { ContentLayout, Card, Title, Text, Divider } from '../../components'

const TextPage = () => {
  return (
    <ContentLayout label='Text Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default'>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum possimus optio, vel corporis inventore
              dolores quaerat. Architecto, rerum accusantium dolorem, ratione, rem cupiditate magni repellat aspernatur
              eum quis quaerat fugit.
            </Text>
            <br />
            <Text color='primaryLight'>Size: 14px / Weight: Regular / Color: Primary</Text>
          </Card>
          <br />
          <Card title='Sizes'>
            <Text size='xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
            <br />
            <Text color='primaryLight'>xs / Size: 12px</Text>
            <Divider />
            <Text size='sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
            <br />
            <Text color='primaryLight'>sm / Size: 14px</Text>
            <Divider />
            <Text size='md'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
            <br />
            <Text color='primaryLight'>md / Size: 16px</Text>
            <Divider />
            <Text size='lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
            <br />
            <Text color='primaryLight'>lg / Size: 18px</Text>
            <Divider />
            <Text size='xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
            <br />
            <Text color='primaryLight'>xl / Size: 20px</Text>
            <Divider />
            <Text size='xxl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
            <br />
            <Text color='primaryLight'>xxl / Size: 22px</Text>
          </Card>
          <br />
          <Card title='Weight'>
            <Text weight='regular'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
            <br />
            <Text color='primaryLight'>Weight: Regular</Text>
            <Divider />
            <Text weight='medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
            <br />
            <Text color='primaryLight'>Weight: Medium</Text>
            <Divider />
            <Text weight='bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
            <br />
            <Text color='primaryLight'>Weight: Bold</Text>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Colors'>
            <Text color='primary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
            <br />
            <Text color='primaryLight'>Color: Primary</Text>
            <Divider />
            <Text color='primaryLight'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
            <br />
            <Text color='primaryLight'>Color: PrimaryLight</Text>
            <Divider />
            <Text color='secondary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
            <br />
            <Text color='primaryLight'>Color: Secondary</Text>
            <Divider />
            <Text color='dark'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
            <br />
            <Text color='primaryLight'>Color: Dark</Text>
            <Divider />
            <Text color='medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
            <br />
            <Text color='primaryLight'>Color: Medium</Text>
            <Divider />
            <Text color='light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
            <br />
            <Text color='primaryLight'>Color: Light</Text>
            <Divider />
            <Text color='success'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
            <br />
            <Text color='primaryLight'>Color: Success</Text>
            <Divider />
            <Text color='error'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
            <br />
            <Text color='primaryLight'>Color: Error</Text>
            <Divider />
            <Text color='info'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
            <br />
            <Text color='primaryLight'>Color: Info</Text>
            <Divider />
            <Text color='warning'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
            <br />
            <Text color='primaryLight'>Color: Warning</Text>
          </Card>
          <br />
          <Card title='Uppercase'>
            <Text uppercase>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
            <br />
            <Text color='primaryLight'>Uppercase: true</Text>
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default TextPage
