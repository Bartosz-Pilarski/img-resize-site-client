import { useEffect, useState } from "react"

import { useField } from "../hooks"
import { submitImage } from "../services/imageService"

import ImageFormExtension from "./ImageFormExtension"
import { getImageDimensionsFromURL, MIMEtoExtension } from "../utils/utils"

const ImageForm = ({ selectedImage, setResultImage, handleImageSelection }) => {
  const width = useField('number')
  const height = useField('number')
  const [extension, setExtension] = useState(null)

  const handleExtensionChange = (event) => {
    setExtension(event.target.value)
  }

  const handleSubmit = async (event, data) => {
    event.preventDefault()
    const submittedImage = await submitImage(data)
    setResultImage(submittedImage)
  }

  const getFormData = () => {
    const formData = new FormData()

    formData.append("width", width.value)
    formData.append("height", height.value)
    formData.append("extension", extension)
    formData.append("image", selectedImage)

    return formData
  }

  useEffect(() => {
    if(!selectedImage) return

    getImageDimensionsFromURL(URL.createObjectURL(selectedImage))
    .then((dimensions) => {
      width.setValue(dimensions.width)
      height.setValue(dimensions.height)
      setExtension(MIMEtoExtension[selectedImage.type] || null)
    })

  }, [selectedImage])

  //Accepted filetypes for input field
  const MIMEs = { accept: Object.keys(MIMEtoExtension) }
  return (
    <form onSubmit={(event) => handleSubmit(event, getFormData())}>
      <input required placeholder="width" name="width" {...width.setup} />
      x
      <input required name="height" placeholder="height" {...height.setup} />

      {Object.values(MIMEtoExtension).map((extensionName) => <ImageFormExtension
        key={extensionName} 
        extensionName={extensionName}
        extensionState={extension}
        handleExtensionChange={handleExtensionChange}
      />)}

      <input required type="file" name="image" {...MIMEs} onChange={(event) => handleImageSelection(event)} />
      
      <button type="submit">Upload</button>
    </form>
  )
}

export default ImageForm