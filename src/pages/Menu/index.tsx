import {
  ContentLayout,
  Card,
  Menu,
  Button,
  IconButton,
  Icon,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '../../components'

const MenuPage = () => {
  return (
    <ContentLayout label='Menu Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Basic'>
            <Menu
              component={<Button>Menu Button</Button>}
              items={[
                {
                  children: (
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <Icon name='Home' />
                      </ListItemIcon>
                      Sample
                    </ListItem>
                  ),
                },
                {
                  children: (
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <Icon name='Setting2' />
                      </ListItemIcon>
                      UI Elements
                    </ListItem>
                  ),
                },
                {
                  children: (
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <Icon name='Filter' />
                      </ListItemIcon>
                      Filter
                    </ListItem>
                  ),
                },
              ]}
            />
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Disable Close'>
            <Menu
              component={<IconButton iconName='More' />}
              items={[
                {
                  children: <div>Element 1 (Disable Close)</div>,
                  disableClose: true,
                },
                {
                  children: <div>Element 2</div>,
                },
                {
                  children: <div>Element 3</div>,
                },
              ]}
            />
          </Card>
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default Selected'>
            <Menu
              component={<IconButton iconName='Setting2' />}
              items={[
                {
                  children: <div>Element 1</div>,
                  selected: true,
                },
                {
                  children: <div>Element 2</div>,
                },
                {
                  children: <div>Element 3</div>,
                },
              ]}
            />
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Disabled Menu Item'>
            <Menu
              component={<IconButton iconName='Filter' />}
              items={[
                {
                  children: <div>Element 1</div>,
                },
                {
                  children: <div>Element 2</div>,
                  disabled: true,
                },
                {
                  children: <div>Element 3</div>,
                },
              ]}
            />
          </Card>
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <Card title='Divider'>
            <Menu
              component={<IconButton iconName='ArrowCircleDown' />}
              items={[
                {
                  children: <div>Element 1</div>,
                },
                {
                  children: <div>Element 2</div>,
                },
                {
                  divider: true,
                },
                {
                  children: <div>Element 3</div>,
                },
              ]}
            />
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Sizes'>
            <Menu
              size='sm'
              component={<Button>Small</Button>}
              items={[
                {
                  children: <div>Element 1</div>,
                },
                {
                  children: <div>Element 2</div>,
                },
              ]}
            />
            &nbsp;&nbsp;
            <Menu
              size='md'
              component={<Button>Medium</Button>}
              items={[
                {
                  children: <div>Element 1</div>,
                },
                {
                  children: <div>Element 2</div>,
                },
              ]}
            />
            &nbsp;&nbsp;
            <Menu
              size='lg'
              component={<Button>Large</Button>}
              items={[
                {
                  children: <div>Element 1</div>,
                },
                {
                  children: <div>Element 2</div>,
                },
              ]}
            />
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default MenuPage
