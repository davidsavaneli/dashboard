import { useEffect, useState } from 'react'
import { FilePondFile, FilePondInitialFile } from 'filepond'
import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginFileEncode from 'filepond-plugin-file-encode'
import FilePondPluginFileMetadata from 'filepond-plugin-file-metadata'
import Dialog from '../Dialog'
import Button from '../Button'
import TextField from '../TextField'

import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

import './styles.css'

registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateSize,
  FilePondPluginFileValidateType,
  FilePondPluginFileEncode,
  FilePondPluginFileMetadata,
)

interface FileUploaderProps {
  initialFiles?: FilePondInitialFile[]
  onFilesChange?: (files: any[]) => void
}

const FileUploader = ({ initialFiles = [], onFilesChange }: FileUploaderProps) => {
  const [openDialog, setOpenDialog] = useState(false)
  const [currentFile, setCurrentFile] = useState<FilePondFile | null>(null)
  const [altText, setAltText] = useState('')

  const handleDialogOpen = () => setOpenDialog(true)
  const handleDialogClose = () => setOpenDialog(false)

  const [files, setFiles] = useState<any[]>(initialFiles)
  const [fileObjects, setFileObjects] = useState<{ source: string; sortIndex: number; altText?: string }[]>([])

  const handleFileObjects = (fileItems: FilePondFile[]) => {
    const objects = fileItems.map((item, index) => {
      const source = item.file instanceof File ? item.getFileEncodeBase64String() : (item.source as string)
      const existingObject = fileObjects.find((obj) => obj.source === source)
      return {
        source,
        sortIndex: index,
        altText: existingObject?.altText || 'default alt text here',
      }
    })
    setFileObjects(objects)
  }

  const handleRemoveFile = (error: any, file: FilePondFile) => {
    !error && setFiles((prevFiles) => prevFiles.filter((f) => f !== file.file))
  }

  useEffect(() => {
    onFilesChange && onFilesChange(fileObjects)
  }, [fileObjects])

  useEffect(() => {
    handleFileObjects(files)
    console.log(files)
  }, [files])

  const cleanFileName = (fileName: string) => {
    return fileName.replace(/[()\s]/g, '').replace(/\.[^/.]+$/, '')
  }

  const handleSave = () => {
    if (currentFile) {
      setFileObjects((prevObjects) =>
        prevObjects.map((obj) =>
          obj.source === (currentFile.file instanceof File ? currentFile.getFileEncodeBase64String() : currentFile.source)
            ? { ...obj, altText: altText || 'default alt text here' }
            : obj
        )
      )
      handleDialogClose()
      setAltText('')
      setCurrentFile(null)
    }
  }

  return (
    <>
      <FilePond
        required
        files={files}
        maxFiles={10}
        maxFileSize={'5MB'}
        acceptedFileTypes={['image/*']}
        allowReorder={true}
        allowFileEncode={true}
        allowMultiple={true}
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        onremovefile={handleRemoveFile}
        onupdatefiles={setFiles}
        onreorderfiles={(fileItems) => {
          setFiles(fileItems)
          handleFileObjects(fileItems)
        }}
        onactivatefile={(file) => {
          console.log(file)
          console.log(cleanFileName(file.file.name))
          setCurrentFile(file)
          setAltText(fileObjects.find((obj) => obj.source === (file.file instanceof File ? file.getFileEncodeBase64String() : file.source))?.altText || '')
          handleDialogOpen()
        }}
        itemInsertLocation='after'
      />
      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        title={'Edit Alt Text'}
        size='sm'
        actions={
          <>
            <Button onClick={handleDialogClose} variant='transparent' color='error'>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save</Button>
          </>
        }
      >
        <TextField
          label='Alt Text'
          value={altText}
          onChange={(e) => setAltText(e.target.value)}
        />
      </Dialog>
    </>
  )
}

export default FileUploader
