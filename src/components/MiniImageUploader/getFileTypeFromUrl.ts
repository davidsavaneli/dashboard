const getFileTypeFromUrl = (url: string) => {
  try {
    const parsedUrl = new URL(url)
    const fileExtension = parsedUrl.pathname.split('.').pop()
    const mimeTypes: Record<string, string> = {
      jpg: 'image/jpeg',
      jpeg: 'image/jpeg',
      png: 'image/png',
      gif: 'image/gif',
      webp: 'image/webp',
      avif: 'image/avif',
      svg: 'image/svg+xml',
    }
    return mimeTypes[fileExtension || ''] || 'unknown'
  } catch (error) {
    return 'unknown'
  }
}

export default getFileTypeFromUrl
