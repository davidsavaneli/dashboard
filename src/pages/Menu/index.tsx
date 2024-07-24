import { ContentLayout, Card, Menu, Button } from '../../components'

const MenuPage = () => {
  return (
    <ContentLayout label='Menu Page'>
      <Card title='Menu'>
        <Menu
          component={<Button>Menu Button</Button>}
          items={[
            {
              children: <div>Element 1</div>,
              onClick: () => console.log('Don`t close'),
              disableClose: true,
            },
            {
              children: <div>Element 2</div>,
              onClick: () => console.log('Default close on click'),
            },
          ]}
        />
      </Card>
    </ContentLayout>
  )
}

export default MenuPage
