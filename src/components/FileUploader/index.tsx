import { useEffect, useState } from 'react'
import { FilePond, registerPlugin } from 'react-filepond'

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginFileEncode from 'filepond-plugin-file-encode'
import FilePondPluginFileMetadata from 'filepond-plugin-file-metadata'

import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

import './styles.css'
import { FilePondFile, FilePondInitialFile } from 'filepond'

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
}

const FileUploader = ({ initialFiles = [] }: FileUploaderProps) => {
  const [files, setFiles] = useState<any[]>(initialFiles)
  const [fileObjects, setFileObjects] = useState<any[]>([])

  const handleFileObjects = (fileItems: FilePondFile[]) => {
    setFileObjects(
      fileItems.map((item, index) => ({
        file: item.getFileEncodeBase64String() || '',
        sortIndex: index,
      })),
    )
  }

  const handleRemoveFile = (error: any, file: FilePondFile) => {
    !error && setFiles((prevFiles) => prevFiles.filter((f) => f !== file.file))
  }

  useEffect(() => {
    console.log(fileObjects, ' - fileObjects')
  }, [fileObjects])

  useEffect(() => {
    files.forEach((file) => {
      if (file && typeof file === 'object' && 'file' in file && 'id' in file) {
        console.log('----------')
        handleFileObjects(files)
      }
    })
  }, [files])

  return (
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
      }}
    />
  )
}

export default FileUploader
