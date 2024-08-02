import { ContentLayout, Card, TextEditor, Space } from '../../components'

const TextEditorPage = () => {
  return (
    <ContentLayout label='Text Editor Component'>
      <Card title='Default'>
        <TextEditor editorId='1' value='' placeholder='Description' onChange={(e) => console.log(e)} />
      </Card>
      <Space />
      <Card title='Error'>
        <TextEditor
          editorId='2'
          value=''
          placeholder='Description'
          onChange={(e) => console.log(e)}
          error
          helperText='Text Editor Helper Text'
        />
      </Card>
    </ContentLayout>
  )
}

export default TextEditorPage
