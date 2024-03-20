import { useEffect, useState } from "react"

import { useField } from "../hooks"
import { submitImage } from "../services/imageService"

import ImageFormExtension from "./ImageFormExtension"
import { getImageDimensionsFromURL, MIMEtoExtension } from "../utils/utils"

const ImageForm = ({ selectedImage, setResultImage, setNotification, handleImageSelection }) => {
  const width = useField('number')
  const height = useField('number')
  const [extension, setExtension] = useState(null)

  const handleExtensionChange = (event) => {
    setExtension(event.target.value)
  }

  const handleSubmit = async (event, data) => {
    event.preventDefault()
    const submittedImage = await submitImage(data)
    if(submittedImage.isError) {
      if(submittedImage.status === 500) return setNotification({ isError: true, content: 'Uploading image failed (internal server error)' })
      return setNotification({ isError: true, content: 'Uploading image failed (bad request)'})
    }
    setNotification({isError: false, content: 'Image processed succesfully'})
    setResultImage(submittedImage.url)
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

  const inputFieldStyle = `
    rounded-md
    bg-slate-800
    w-24
  `
  const headerStyle = `
    text-2xl
    font-bold 
    p-1
    pr-6
  `
  return (
    <form 
      className="
        flex flex-col
        space-y-2
      bg-slate-700
        rounded-md
        "
      onSubmit={(event) => handleSubmit(event, getFormData())}
    >
      <div>
        <h2 className={headerStyle+"bg-emerald-700"}>Upload your image:</h2>
        <input 
          className="
            block 
            m-4 mx-auto
            bg-slate-800 file:bg-slate-600
            rounded-md file:rounded-md  
            file:text-white 
            file:px-2 file:py-1 
            border-emerald-500 border-b-2 file:border-0
            transition-all 
            hover:shadow-md hover:shadow-emerald-500/50 hover:border-emerald-400 hover:cursor-pointer
            "
          required 
          type="file" 
          name="image" 
          {...MIMEs} 
          onChange={(event) => handleImageSelection(event)} 
        />
      </div>
      <div>
        <h2 className={headerStyle}> Specify your desired dimensions: </h2>
        <div className="flex flex-row justify-center p-4">
          <input
            className={inputFieldStyle}
            required
            placeholder="width"
            name="width"
            {...width.setup}
          />
          <span className="text-2xl mx-4">x</span>
          <input
            className={inputFieldStyle}
            required
            placeholder="height"
            name="height"
            {...height.setup}
          />
        </div>
      </div>
      <div>
        <h2 className={headerStyle}> Your desired filetype: </h2>
        {Object.values(MIMEtoExtension).map((extensionName) => <ImageFormExtension
          key={extensionName} 
          extensionName={extensionName}
          extensionState={extension}
          handleExtensionChange={handleExtensionChange}
        />)}
      </div>
      <div>
        <h2 className={headerStyle+'text-center'}> ...and resize!</h2>
        <button className="block border-emerald-600 border-b-2 rounded-md px-2 py-1 mb-2 mx-auto bg-slate-600 transition-all hover:shadow-md hover:shadow-emerald-500/50 hover:border-emerald-500" type="submit">Upload</button>
      </div>
      
    </form>
  )
}

export default ImageForm