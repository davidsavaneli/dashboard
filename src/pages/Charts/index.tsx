import { ContentLayout, BarChartSmall, IconButton, Menu, Space } from '../../components'

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
            }}
          />
        </div>
        <div className='col-3'>
          <BarChartSmall
            color='medium'
            cardProps={{
              title: 'All Earnings',
              icon: 'Wallet3',
            }}
          />
        </div>
        <div className='col-3'>
          <BarChartSmall
            color='light'
            cardProps={{
              title: 'All Earnings',
              icon: 'Wallet3',
            }}
          />
        </div>
        <div className='col-3'>
          <BarChartSmall
            color='success'
            cardProps={{
              title: 'All Earnings',
              icon: 'Wallet3',
            }}
          />
        </div>
        <div className='col-3'>
          <BarChartSmall
            color='error'
            cardProps={{
              title: 'All Earnings',
              icon: 'Wallet3',
            }}
          />
        </div>
        <div className='col-3'>
          <BarChartSmall
            color='info'
            cardProps={{
              title: 'All Earnings',
              icon: 'Wallet3',
            }}
          />
        </div>
        <div className='col-3'>
          <BarChartSmall
            color='warning'
            cardProps={{
              title: 'All Earnings',
              icon: 'Wallet3',
            }}
          />
        </div>
      </div>
      <Space m='lg' />
      <div className='row'>
        <div className='col-3'>
          <BarChartSmall
            horizontal={true}
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
            horizontal={true}
            color='dark'
            cardProps={{
              title: 'All Earnings',
              icon: 'Wallet3',
            }}
          />
        </div>
        <div className='col-3'>
          <BarChartSmall
            horizontal={true}
            color='medium'
            cardProps={{
              title: 'All Earnings',
              icon: 'Wallet3',
            }}
          />
        </div>
        <div className='col-3'>
          <BarChartSmall
            horizontal={true}
            color='light'
            cardProps={{
              title: 'All Earnings',
              icon: 'Wallet3',
            }}
          />
        </div>
        <div className='col-3'>
          <BarChartSmall
            horizontal={true}
            color='success'
            cardProps={{
              title: 'All Earnings',
              icon: 'Wallet3',
            }}
          />
        </div>
        <div className='col-3'>
          <BarChartSmall
            horizontal={true}
            color='error'
            cardProps={{
              title: 'All Earnings',
              icon: 'Wallet3',
            }}
          />
        </div>
        <div className='col-3'>
          <BarChartSmall
            horizontal={true}
            color='info'
            cardProps={{
              title: 'All Earnings',
              icon: 'Wallet3',
            }}
          />
        </div>
        <div className='col-3'>
          <BarChartSmall
            horizontal={true}
            color='warning'
            cardProps={{
              title: 'All Earnings',
              icon: 'Wallet3',
            }}
          />
        </div>
      </div>
    </ContentLayout>
  )
}

export default ChartsPage
