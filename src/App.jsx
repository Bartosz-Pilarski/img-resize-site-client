import axios from "axios"
import { useEffect, useState } from "react"

function App() {
  const [selectedImage, setSelectedImage] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append("extension", "png")
    formData.append("image", selectedImage)

    axios
      .post("http://localhost:3001/api/images", formData,  { headers: {'Content-Type': 'multipart/form-data'}})
      .then(res => console.log(res.data))
  }

  const handleImageSelection = (event) => {
    console.log(event.target.files[0])
    setSelectedImage(event.target.files[0])
  }

  useEffect(() => {
    const bytes = selectedImage ? selectedImage.size : 1024
    console.log(Math.log(bytes), Math.log(1024))
    console.log(Math.floor(Math.log(bytes)/Math.log(1024)))
  }, [selectedImage])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="file" name="image" onChange={(event) => handleImageSelection(event)} />
        <button type="submit">Upload</button>
      </form>
      {selectedImage 
        ? (<> <h2> Preview </h2> <img src={URL.createObjectURL(selectedImage)} alt="user-uploaded image" /> </>)
        : null}
    </>
  )
}

export default App
