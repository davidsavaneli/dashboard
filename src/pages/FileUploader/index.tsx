import { useEffect, useState } from 'react'
import { ContentLayout, Card, FileUploader, Space } from '../../components'

import imgSrc from '../../assets/images/user.png'

const FileUploaderPage = () => {
  return (
    <ContentLayout label='FileUploader Component'>
      <Card title='Image'>
        <FileUploader
          initialFiles={[
            {
              source:
                'https://images.unsplash.com/photo-1719937206498-b31844530a96?q=80&w=3600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              options: {
                type: 'input',
              },
            },
          ]}
          onFilesChange={(files: any[]) => console.log(files)}
        />
      </Card>
    </ContentLayout>
  )
}

export default FileUploaderPage
