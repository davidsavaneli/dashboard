import { ContentLayout, Card, TextEditor } from '../../components'

const TextEditorPage = () => {
  return (
    <ContentLayout label='Text Editor Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default'>
            <TextEditor size='small' editorId='1' value='' placeholder='Description' onChange={(e) => console.log(e)} />
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default TextEditorPage
