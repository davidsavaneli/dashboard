import { useState } from 'react'
import { ContentLayout, Card, FileUploader, Space } from '../../components'

const FileUploaderPage = () => {
  return (
    <ContentLayout label='FileUploader Component'>
      <Card title='Image'>
        <FileUploader />
      </Card>
    </ContentLayout>
  )
}

export default FileUploaderPage
