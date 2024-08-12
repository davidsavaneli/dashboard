import { ContentLayout, BarChartSmall, LineChartSmall, IconButton, Menu, Space } from '../../components'

const ChartsPage = () => {
  return (
    <ContentLayout label='Charts Page'>
      <div className='row'>
        <div className='col-3'>
          <BarChartSmall
            cardProps={{
              title: 'Earnings',
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
            series={[
              {
                name: 'users',
                data: [130, 100, 180, 70, 80, 130, 160],
              },
            ]}
            additionalInfo={{
              primary: {
                label: '4000$',
              },
              secondary: {
                label: '+30.6%',
                isPercentage: true,
              },
            }}
          />
          <Space />
        </div>
        <div className='col-3'>
          <BarChartSmall
            horizontal={true}
            cardProps={{
              title: 'Earnings',
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
            series={[
              {
                name: 'users',
                data: [180, 100, 120, 70, 80, 130, 160],
              },
            ]}
            additionalInfo={{
              primary: {
                label: '4000$',
              },
              secondary: {
                label: '-20.2%',
                isPercentage: true,
              },
            }}
          />
          <Space />
        </div>
        <div className='col-3'>
          <LineChartSmall
            cardProps={{
              title: 'Earnings',
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
            series={[
              {
                name: 'users',
                data: [110, 100, 120, 80, 90, 130, 105],
              },
            ]}
            additionalInfo={{
              primary: {
                label: '4000$',
              },
              secondary: {
                label: 'Label',
                isPercentage: false,
              },
            }}
          />
          <Space />
        </div>
      </div>
    </ContentLayout>
  )
}

export default ChartsPage
