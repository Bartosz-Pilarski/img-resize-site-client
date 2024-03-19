import { useState } from "react"
import ImageForm from "./components/ImageForm"
import { MIMEtoExtension } from "./utils/utils"

function App() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [resultImage, setResultImage] = useState("/")

  const handleImageSelection = (event) => {
    const file = event.target.files[0]
    //Block files bigger than 50MB
    if(file.size > 52428800) return
    //Block files of incompatible formats
    if(!MIMEtoExtension[file.type]) return
    setSelectedImage(file)
  }

  return (
    <>
      <ImageForm
        selectedImage={selectedImage}
        setResultImage={setResultImage}
        handleImageSelection={handleImageSelection}
      />
      {selectedImage 
        ? (<> <h2> Preview </h2> <img src={URL.createObjectURL(selectedImage)} alt="user-uploaded image" /> <h2> Result </h2> <img src={resultImage} alt="result image" /> </>)
        : null}
    </>
  )
}

export default App
