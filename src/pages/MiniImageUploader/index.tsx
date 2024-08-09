import { ContentLayout, Card, MiniImageUploader, Space } from '../../components'

const MiniImageUploaderPage = () => {
  return (
    <ContentLayout label='Mini Image Uploader Component'>
      <Card title='Uploaded'>
        <MiniImageUploader url='https://ableproadmin.com/react/assets/avatar-6-Cv0iCdgR.png' />
      </Card>
      <Space />
      <Card title='Not Uploaded'>
        <MiniImageUploader
          onFileSelect={(file) => {
            console.log(file)
          }}
        />
      </Card>
      <Space />
      <Card title='Disabled'>
        <MiniImageUploader url='https://ableproadmin.com/react/assets/avatar-6-Cv0iCdgR.png' disabled />
      </Card>
    </ContentLayout>
  )
}

export default MiniImageUploaderPage
