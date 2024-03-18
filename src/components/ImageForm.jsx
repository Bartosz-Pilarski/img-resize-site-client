import { useState } from "react"

import { useField } from "../hooks"
import { submitImage } from "../services/imageService"

import ImageFormExtension from "./ImageFormExtension"

const ImageForm = ({ selectedImage, setResultImage, handleImageSelection }) => {
  const width = useField('number')
  const height = useField('number')
  const [extension, setExtension] = useState('png')

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

    formData.append("width", Number(width.value))
    formData.append("height", Number(height.value))
    formData.append("extension", extension)
    formData.append("image", selectedImage)

    return formData
  }

  const extensions = [
    "png",
    "jpg"
  ]

  return (
    <form onSubmit={(event) => handleSubmit(event, getFormData())}>
      <input required placeholder="width" name="width" {...width.setup} />
      x
      <input required name="height" placeholder="height" {...height.setup} />

      {extensions.map((extensionName) => <ImageFormExtension
        key={extensionName} 
        extensionName={extensionName}
        extensionState={extension}
        handleExtensionChange={handleExtensionChange}
      />)}

      <input required type="file" name="image" onChange={(event) => handleImageSelection(event)} />
      
      <button type="submit">Upload</button>
    </form>
  )
}

export default ImageForm