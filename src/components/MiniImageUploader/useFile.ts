import { ChangeEvent, useEffect, useState } from 'react'
import getFileTypeFromUrl from './getFileTypeFromUrl'

type UseFileProps = {
  url: string
  onFileSelect: (file: File) => void
}

const useFile = ({ url, onFileSelect }: UseFileProps) => {
  const [selectedFile, setSelectedFile] = useState<File>()
  const [previewImage, setPreviewImage] = useState<string>()
  const [fileType, setFileType] = useState<string>('')

  const handelSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      setFileType('')
      return
    }

    const file = e.target.files[0]

    setSelectedFile(file)
    setFileType(file.type)
    onFileSelect(file)
  }

  useEffect(() => {
    if (!selectedFile) {
      setPreviewImage(undefined)
      setFileType('')
      if (url) {
        setPreviewImage(url)
        setFileType(getFileTypeFromUrl(url))
      }
      return
    }
    const objectUrl = URL.createObjectURL(selectedFile)
    setPreviewImage(objectUrl)

    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile, url])

  return {
    handelSelect,
    previewImage,
    selectedFile,
    fileType,
  }
}

export default useFile
