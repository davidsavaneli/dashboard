import { ContentLayout, BarChartSmall, IconButton, Menu } from '../../components'

const ChartsPage = () => {
  return (
    <ContentLayout label='Charts Page'>
      <div className='row'>
        <div className='col-3'>
          <BarChartSmall
            cardProps={{
              title: 'All Earnings',
              icon: 'Wallet3',
              headerActions: (
                <Menu
                  component={<IconButton iconName='More' />}
                  items={[
                    {
                      children: 'Today',
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
          <BarChartSmall />
        </div>
        <div className='col-3'>
          <BarChartSmall />
        </div>
        <div className='col-3'>
          <BarChartSmall />
        </div>
      </div>
    </ContentLayout>
  )
}

export default ChartsPage
