import { useState } from "react"

import { useField } from "../hooks"

import ImageFormExtension from "./ImageFormExtension"

const ImageForm = ({ handleSubmit, handleImageSelection }) => {
  const width = useField('number')
  const height = useField('number')
  const image = useField('file')
  const [extension, setExtension] = useState('png')

  const handleExtensionChange = (event) => {
    setExtension(event.target.value)
  }

  const extensions = [
    "png",
    "jpg"
  ]

  const getFormData = () => {
    const formData = new FormData()

    formData.append("width", width.value)
    formData.append("height", height.value)
    formData.append("extension", extension)

    return formData
  }

  return (
    <form onSubmit={(event) => { 
      event.preventDefault() 
      handleSubmit(event, getFormData())
      }}>
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