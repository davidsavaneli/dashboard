import { ContentLayout, Card, MiniFileUploader, Space } from '../../components'

const MiniFileUploaderPage = () => {
  return (
    <ContentLayout label='MiniFileUploader Component'>
      <Card title='Uploaded'>
        <MiniFileUploader url='https://ableproadmin.com/react/assets/avatar-6-Cv0iCdgR.png' />
      </Card>
      <Space />
      <Card title='Not Uploaded'>
        <MiniFileUploader
          text='Upload Image'
          onFileSelect={(file) => {
            console.log(file)
          }}
        />
      </Card>
      <Space />
      <Card title='Disabled'>
        <MiniFileUploader url='https://ableproadmin.com/react/assets/avatar-6-Cv0iCdgR.png' disabled />
      </Card>
    </ContentLayout>
  )
}

export default MiniFileUploaderPage
