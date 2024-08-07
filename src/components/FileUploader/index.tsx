import { useEffect, useState } from 'react'
import { FilePondFile } from 'filepond'
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
import Toast from '../Toast'

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

interface InitialFileProps {
  source: string
  sortIndex: number
  altText?: string
}

interface FileUploaderProps {
  initialFiles?: InitialFileProps[]
  onFilesChange?: (files: InitialFileProps[]) => void
}

const FileUploader = ({ initialFiles = [], onFilesChange }: FileUploaderProps) => {
  const [openDialog, setOpenDialog] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('Edit Alt Text')
  const [altText, setAltText] = useState('')
  const [currentFile, setCurrentFile] = useState<FilePondFile | null>(null)

  const handleDialogOpen = (fileName: string) => {
    setDialogTitle(fileName)
    setOpenDialog(true)
  }

  const handleDialogClose = () => setOpenDialog(false)

  const sortedInitialFiles = [...initialFiles].sort((a, b) => a.sortIndex - b.sortIndex)

  const [files, setFiles] = useState<any[]>(sortedInitialFiles)
  const [fileObjects, setFileObjects] = useState<InitialFileProps[]>(sortedInitialFiles)

  const handleFileObjects = (fileItems: FilePondFile[]) => {
    const objects = fileItems.map((item, index) => {
      const source = item.file instanceof File ? item.getFileEncodeBase64String() : (item.source as string)
      const existingObject = fileObjects.find((obj) => obj.source === source)
      return {
        source,
        sortIndex: index,
        altText: existingObject?.altText || 'Default Alt Text',
      }
    })
    setFileObjects(objects)
  }

  const handleRemoveFile = (error: any, file: FilePondFile) => {
    if (!error) {
      setFiles((prevFiles) => prevFiles.filter((f) => f !== file.file))
    }
  }

  useEffect(() => {
    onFilesChange && onFilesChange(fileObjects)
  }, [fileObjects])

  useEffect(() => {
    handleFileObjects(files)
  }, [files])

  const cleanFileName = (fileName: string) => {
    return fileName.replace(/[()\s]/g, '').replace(/\.[^/.]+$/, '')
  }

  const handleDialogSave = () => {
    if (currentFile) {
      const fileSource = currentFile.file instanceof File ? currentFile.getFileEncodeBase64String() : currentFile.source
      setFileObjects((prevObjects) =>
        prevObjects.map((obj) =>
          obj.source === fileSource ? { ...obj, altText: altText || 'Default Alt Text' } : obj,
        ),
      )
      handleDialogClose()
      setAltText('')
      setCurrentFile(null)
      Toast.success('Alt Text Successfully Saved')
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
          const fileSource = file.file instanceof File ? file.getFileEncodeBase64String() : file.source
          setCurrentFile(file)
          setAltText(fileObjects.find((obj) => obj.source === fileSource)?.altText || '')
          handleDialogOpen(file.file.name as string)
        }}
        itemInsertLocation='after'
      />
      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        title={dialogTitle}
        size='sm'
        actions={
          <>
            <Button onClick={handleDialogClose} variant='transparent' color='error'>
              Cancel
            </Button>
            <Button onClick={handleDialogSave}>Save</Button>
          </>
        }
      >
        <TextField label='Alt Text' value={altText} onChange={(e) => setAltText(e.target.value)} />
      </Dialog>
    </>
  )
}

export default FileUploader
