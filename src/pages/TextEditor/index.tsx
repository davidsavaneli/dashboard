import { ContentLayout, Card, TextEditor } from '../../components'

const TextEditorPage = () => {
  return (
    <ContentLayout label='Text Editor Page'>
      <Card title='Text Editor'>
        <TextEditor size='small' editorId='1' value='' placeholder='Description' onChange={(e) => console.log(e)} />
      </Card>
    </ContentLayout>
  )
}

export default TextEditorPage
