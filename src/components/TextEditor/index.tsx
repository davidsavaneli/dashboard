import { useState, useEffect } from 'react'
import clsx from 'clsx'
import ReactQuill, { Quill } from 'react-quill'
// @ts-ignore
import ImageResize from 'quill-image-resize-module-react'
import textEditorContext from './TextEditorStore'

import 'react-quill/dist/quill.snow.css'
import styles from './styles.module.css'
import FormHelperText from '../FormHelperText'

const CustomUndo = () => (
  <svg viewBox='0 0 18 18'>
    <polygon className='ql-fill ql-stroke' points='6 10 4 12 2 10 6 10' />
    <path className='ql-stroke' d='M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9' />
  </svg>
)
const CustomRedo = () => (
  <svg viewBox='0 0 18 18'>
    <polygon className='ql-fill ql-stroke' points='12 10 14 12 16 10 12 10' />
    <path className='ql-stroke' d='M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5' />
  </svg>
)
function undoChange() {
  // @ts-ignoreX
  this.quill.history.undo()
}
// @ts-ignore
function redoChange() {
  // @ts-ignoreX
  this.quill.history.redo()
}

const Size = Quill.import('formats/size')
Size.whitelist = ['size-10', 'size-12', 'size-14', 'size-16', 'size-18', 'size-20']

Quill.register(Size, true)
Quill.register('modules/imageResize', ImageResize)

export interface TextEditorProps {
  editorId: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  disabled?: boolean
  error?: boolean
  helperText?: string
}

export const TextEditor = ({ placeholder = '', error, helperText, disabled = false, ...props }: TextEditorProps) => {
  const modules = {
    toolbar: {
      container: '#editorId-' + props.editorId,
      handlers: {
        undo: undoChange,
        redo: redoChange,
      },
    },
    history: {
      delay: 500,
      maxStack: 100,
      userOnly: true,
    },
    imageResize: {
      parchment: Quill.import('parchment'),
      modules: ['Resize', 'DisplaySize'],
    },
  }

  const [text, setText] = useState('')

  useEffect(() => {
    setText(props.value)
  }, [props.value])

  const handleChange = (value: any) => {
    setText(value)

    props.onChange(value)
    textEditorContext.setHtmlValue(value, props.editorId)
  }

  return (
    <div
      className={clsx(`${styles.textEditorBox}`, {
        disabled: disabled,
      })}
    >
      <div
        className={clsx(styles.textEditorInnerBox, {
          [styles.error]: error,
        })}
      >
        <div
          id={`text-editor-${props.editorId}`}
          style={{ display: 'none' }}
          dangerouslySetInnerHTML={{ __html: text || '' }}
        ></div>
        <div id={`editorId-${props.editorId}`}>
          <select className='ql-size' defaultValue='size-14'>
            <option value='size-10'>Size: 10px</option>
            <option value='size-12'>Size: 12px</option>
            <option value='size-14'>Size: 14px</option>
            <option value='size-16'>Size: 16px</option>
            <option value='size-18'>Size: 18px</option>
            <option value='size-20'>Size: 20px</option>
          </select>
          <select className='ql-header' defaultValue='normal'>
            <option value='normal'>Normal</option>
            <option value='1'>H1</option>
            <option value='2'>H2</option>
            <option value='3'>H3</option>
            <option value='4'>H4</option>
            <option value='5'>H5</option>
            <option value='6'>H6</option>
          </select>
          <button className='ql-bold' />
          <button className='ql-italic' />
          <button className='ql-underline' />
          <button className='ql-list' value='ordered' />
          <button className='ql-list' value='bullet' />
          <button className='ql-indent' value='-1' />
          <button className='ql-indent' value='+1' />
          <button className='ql-script' value='super' />
          <button className='ql-script' value='sub' />
          <select className='ql-align' />
          <select className='ql-color' />
          <button className='ql-link' />
          <button className='ql-image' />
          <button className='ql-code-block' />
          <button className='ql-undo'>
            <CustomUndo />
          </button>
          <button className='ql-redo'>
            <CustomRedo />
          </button>
        </div>
        <ReactQuill
          theme='snow'
          value={text ?? ''}
          onChange={handleChange}
          placeholder={placeholder}
          modules={modules}
        />
      </div>

      {helperText && <FormHelperText error={error}>{helperText}</FormHelperText>}
    </div>
  )
}

export default TextEditor
