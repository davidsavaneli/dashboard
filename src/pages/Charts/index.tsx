import { ContentLayout, BarChartSmall, IconButton, Menu } from '../../components'

const ChartsPage = () => {
  return (
    <ContentLayout label='Charts Page'>
      <div className='row'>
        <div className='col-3'>
          <BarChartSmall
            color='primary'
            cardProps={{
              title: 'All Earnings',
              icon: 'Wallet3',
              headerActions: (
                <Menu
                  component={<IconButton iconName='More' />}
                  items={[
                    {
                      children: 'Daily',
                      selected: true,
                    },
                    {
                      children: 'Weekly',
                    },
                    {
                      children: 'Monthly',
                    },
                  ]}
                />
              ),
            }}
          />
        </div>
        <div className='col-3'>
          <BarChartSmall
            color='dark'
            cardProps={{
              title: 'All Earnings',
              icon: 'Wallet3',
              headerActions: (
                <Menu
                  component={<IconButton iconName='More' />}
                  items={[
                    {
                      children: 'Daily',
                      selected: true,
                    },
                    {
                      children: 'Weekly',
                    },
                    {
                      children: 'Monthly',
                    },
                  ]}
                />
              ),
            }}
          />
        </div>
        <div className='col-3'>
          <BarChartSmall
            color='medium'
            cardProps={{
              title: 'App Downloads',
              icon: 'CloudChange',
              headerActions: (
                <Menu
                  component={<IconButton iconName='More' />}
                  items={[
                    {
                      children: 'Daily',
                      selected: true,
                    },
                    {
                      children: 'Weekly',
                    },
                    {
                      children: 'Monthly',
                    },
                  ]}
                />
              ),
            }}
          />
        </div>
        <div className='col-3'>
          <BarChartSmall
            color='light'
            cardProps={{
              title: 'Registered Users',
              icon: 'Profile2User',
              headerActions: (
                <Menu
                  component={<IconButton iconName='More' />}
                  items={[
                    {
                      children: 'Daily',
                      selected: true,
                    },
                    {
                      children: 'Weekly',
                    },
                    {
                      children: 'Monthly',
                    },
                  ]}
                />
              ),
            }}
          />
        </div>
        <div className='col-3'>
          <BarChartSmall
            color='success'
            cardProps={{
              title: 'Registered Users',
              icon: 'Profile2User',
              headerActions: (
                <Menu
                  component={<IconButton iconName='More' />}
                  items={[
                    {
                      children: 'Daily',
                      selected: true,
                    },
                    {
                      children: 'Weekly',
                    },
                    {
                      children: 'Monthly',
                    },
                  ]}
                />
              ),
            }}
          />
        </div>
        <div className='col-3'>
          <BarChartSmall
            color='error'
            cardProps={{
              title: 'Registered Users',
              icon: 'Profile2User',
              headerActions: (
                <Menu
                  component={<IconButton iconName='More' />}
                  items={[
                    {
                      children: 'Daily',
                      selected: true,
                    },
                    {
                      children: 'Weekly',
                    },
                    {
                      children: 'Monthly',
                    },
                  ]}
                />
              ),
            }}
          />
        </div>
        <div className='col-3'>
          <BarChartSmall
            color='info'
            cardProps={{
              title: 'Registered Users',
              icon: 'Profile2User',
              headerActions: (
                <Menu
                  component={<IconButton iconName='More' />}
                  items={[
                    {
                      children: 'Daily',
                      selected: true,
                    },
                    {
                      children: 'Weekly',
                    },
                    {
                      children: 'Monthly',
                    },
                  ]}
                />
              ),
            }}
          />
        </div>
        <div className='col-3'>
          <BarChartSmall
            color='warning'
            cardProps={{
              title: 'Registered Users',
              icon: 'Profile2User',
              headerActions: (
                <Menu
                  component={<IconButton iconName='More' />}
                  items={[
                    {
                      children: 'Daily',
                      selected: true,
                    },
                    {
                      children: 'Weekly',
                    },
                    {
                      children: 'Monthly',
                    },
                  ]}
                />
              ),
            }}
          />
        </div>
      </div>
    </ContentLayout>
  )
}

export default ChartsPage
