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
  const [fileObjects, setFileObjects] = useState<{ source: string, sortIndex: number }[]>([])

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = error => reject(error)
    })
  }

  const handleFileObjects = async (fileItems: FilePondFile[]) => {
    const objects = await Promise.all(
      fileItems.map(async (item, index) => {
        const source = item.file instanceof File
          ? await fileToBase64(item.file)
          : item.source as string
        return { source, sortIndex: index }
      })
    )
    setFileObjects(objects)
  }

  const handleRemoveFile = (error: any, file: FilePondFile) => {
    !error && setFiles((prevFiles) => prevFiles.filter((f) => f !== file.file))
  }

  useEffect(() => {
    console.log(fileObjects, ' - fileObjects')
  }, [fileObjects])

  useEffect(() => {
    handleFileObjects(files)
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
