import { ContentLayout, Card, FileUploader } from '../../components'

const FileUploaderPage = () => {
  return (
    <ContentLayout label='FileUploader Component'>
      <Card title='Image'>
        <FileUploader
          initialFiles={[
            {
              source:
                'https://plus.unsplash.com/premium_photo-1722686516461-46770349c814?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D',
              sortIndex: 1,
              altText: 'chama',
            },
            {
              source:
                'https://images.unsplash.com/photo-1719937206498-b31844530a96?q=80&w=3600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              sortIndex: 0,
              altText: 'gogo',
            },
          ]}
          onFilesChange={(files) => console.log(files)}
        />
      </Card>
    </ContentLayout>
  )
}

export default FileUploaderPage
