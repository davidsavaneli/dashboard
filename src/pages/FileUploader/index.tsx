import { ContentLayout, Card, FileUploader, Space } from '../../components'

const FileUploaderPage = () => {
  return (
    <ContentLayout label='File Uploader Component'>
      <Card title='Default'>
        <FileUploader title='Main Photo' secondaryTitle='Recommended Size' secondaryTitleValue='1600px - 1200px' />
      </Card>
      <Space />
      <Card title='Multiple'>
        <FileUploader
          secondaryTitle='Multiple images'
          allowMultiple
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
          showAltTextAlert={false}
        />
      </Card>
      <Space />
      <Card title='Single'>
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
        />
      </Card>
      <Space />
      <Card title='Only Images'>
        <FileUploader
          title='Image Gallery'
          allowMultiple
          acceptedFileTypes={['image/*']}
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
        />
      </Card>
      <Space />
      <Card title='Disabled'>
        <FileUploader
          initialFiles={[
            {
              source:
                'https://plus.unsplash.com/premium_photo-1722686516461-46770349c814?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D',
              sortIndex: 1,
              altText: 'chama',
            },
          ]}
          allowMultiple
          disabled
        />
      </Card>
      <Space />
      <Card title='Error'>
        <FileUploader error helperText='Required' />
      </Card>
    </ContentLayout>
  )
}

export default FileUploaderPage
