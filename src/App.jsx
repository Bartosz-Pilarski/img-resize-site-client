import axios from "axios"
import { useState } from "react"
import ImageForm from "./components/ImageForm"

function App() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [resultImage, setResultImage] = useState("/")

  const handleSubmit = (event, data) => {
    event.preventDefault()
    console.log(data)
    data.append("image", selectedImage)
    axios
      .post("http://localhost:3001/api/images", data,  { headers: { 'Content-Type': 'multipart/form-data' } })
      .then(res => setResultImage(`http://localhost:3001/${res.data.url}`))
  }

  const handleImageSelection = (event) => {
    console.log(event.target.files[0])
    setSelectedImage(event.target.files[0])
  }

  return (
    <>
      <ImageForm
        handleSubmit={handleSubmit}
        handleImageSelection={handleImageSelection}
      />
      {selectedImage 
        ? (<> <h2> Preview </h2> <img src={URL.createObjectURL(selectedImage)} alt="user-uploaded image" /> <h2> Result </h2> <img src={resultImage} alt="result image" /> </>)
        : null}
    </>
  )
}

export default App
