import { ContentLayout, BarChartSmall, IconButton, Menu, Space } from '../../components'

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
            chartData={{
              primaryInfo: '5000$',
              series: [
                {
                  name: 'users',
                  data: [130, 100, 180, 70, 80, 130, 160],
                },
              ],
            }}
          />
          <Space />
        </div>

        <div className='col-3'>
          <BarChartSmall
            horizontal={true}
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
            chartData={{
              primaryInfo: '5000$',
              series: [
                {
                  name: 'users',
                  data: [130, 100, 180, 70, 80, 130, 160],
                },
              ],
            }}
          />
          <Space />
        </div>
      </div>
    </ContentLayout>
  )
}

export default ChartsPage
