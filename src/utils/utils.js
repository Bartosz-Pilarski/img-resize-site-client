const getImageDimensionsFromURL = (ObjectURL) => new Promise(
  resolve => {
    const img = new Image()
    img.onload = () => {
      resolve({
        height: img.height,
        width: img.width
      })
    }
    img.src = ObjectURL
  }
)

const MIMEtoExtension = {
  'image/webp': 'webp',
  'image/avif': 'avif',
  'image/gif': 'gif',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/tiff': 'tiff',
  //SVG is read-only
  'image/svg+xml': 'svg'
}

export {
  getImageDimensionsFromURL,
  MIMEtoExtension
}