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

export {
  getImageDimensionsFromURL
}