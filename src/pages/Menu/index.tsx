import { ContentLayout, Card, Menu, Button } from '../../components'

const MenuPage = () => {
  return (
    <ContentLayout label='Menu Page'>
      <Card title='Menu'>
        <Menu
          component={<Button>Menu</Button>}
          items={[
            {
              children: <div>some element</div>,
              onClick: () => console.log('Do not close'),
              disableClose: true,
            },
            {
              children: <div>some element</div>,
              onClick: () => console.log('Default close on click'),
            },
          ]}
        />
      </Card>
    </ContentLayout>
  )
}

export default MenuPage
