import { ContentLayout, Card, Tooltip, Button } from '../../components'

const ButtonPage = () => {
  return (
    <ContentLayout label='Button Page'>
      <Card title='Button With Tooltip'>
        <Tooltip title='Button Tooltip'>
          <Button>Button</Button>
        </Tooltip>
      </Card>
    </ContentLayout>
  )
}

export default ButtonPage
