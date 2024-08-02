import { ContentLayout, Card, File, Space } from '../../components'

const FilePage = () => {
  return (
    <ContentLayout label='File Component'>
      <Card title='Default'>
        <File
          name='Name Image'
          url='https://meamacorestorage.blob.core.windows.net/system-notifications/7200e7bd-d16c-4c66-abfa-43a4b0c00073.jpg'
        />
      </Card>
      <Space />
      <Card title='Default'>
        <File
          name='Name File'
          url='https://meamacorestorage.blob.core.windows.net/system-notifications/418af4d2-dec5-4980-b8f4-7452ae50c15b.xlsx'
        />
      </Card>
    </ContentLayout>
  )
}

export default FilePage
