export const TextEditorStore = class {
  value: Record<any, any> = {}
  requestToServer = async (file: any) => ''

  // @ts-ignore
  setHtmlValue = (val: any, editorId: any) => (this.value[editorId] = val)

  setImageUrls = async (editorId: any) => {
    const contentDiv = document.getElementById(`text-editor-${editorId}`)

    if (!contentDiv) {
      return false
    }
    const imagesToUploud = contentDiv.getElementsByTagName('img')
    if (imagesToUploud && imagesToUploud?.length > 0) {
      for (let index = 0; index < imagesToUploud.length; index++) {
        const element = imagesToUploud[index]
        const file = this.dataURLtoFile(
          element?.currentSrc,
          `image-from-editor.${element?.currentSrc?.substring('data:image/'?.length, element?.currentSrc?.indexOf(';base64'))}`,
        )
        if (file) {
          this.value[editorId] = this.value[editorId].replace(element.currentSrc, await this.requestToServer(file))
        }
      }
    }
    // @ts-ignore
    return this.value[editorId]
  }

  dataURLtoFile = (dataurl: any, filename: string) => {
    try {
      if (dataurl.includes('https://')) return

      // eslint-disable-next-line prefer-const
      let arr = dataurl?.split(','),
        // eslint-disable-next-line prefer-const
        mime = arr[0]?.match(/:(.*?);/)[1],
        // eslint-disable-next-line prefer-const
        bstr = atob(arr[1]),
        n = bstr?.length,
        // eslint-disable-next-line prefer-const
        u8arr = new Uint8Array(n)

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }

      return new File([u8arr], filename, { type: mime })
    } catch (ex) {
      // @ts-ignore
      return new File([u8arr], filename, { type: mime })
    }
  }
}

export default new TextEditorStore()
