import { useState } from 'react'

import { MIMEtoExtension } from '../../utils/utils'

import ImageForm from '../ImageForm'
import ImagePreview from '../ImagePreview'
import ImageResult from '../ImageResult'
import Notification from '../Notification'
import Hero from '../layout/Hero'

const Index = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [resultImage, setResultImage] = useState('/')
  const [notification, setNotification] = useState({ isError: false, content: null })

  const handleImageSelection = (event) => {
    const file = event.target.files[0]
    //Block files bigger than 50MB
    if(file.size > 52428800) return setNotification({ isError: true, content: 'Max file size is 50MB' })
    //Block files of incompatible formats
    if(!MIMEtoExtension[file.type]) return setNotification({ isError: true, content: 'Incorrect file type uploaded'})
    setSelectedImage(file)
  }

  return (
    <div className='flex flex-col'>
      <Hero></Hero>
      <div className='flex flex-row max-md:flex-col justify-center mx-auto border-2 rounded-md border-emerald-700'>
        <ImageForm
          selectedImage={selectedImage}
          setResultImage={setResultImage}
          setNotification={setNotification}
          handleImageSelection={handleImageSelection}
        />
        <ImagePreview selectedImage={selectedImage} />
      </div>
      <Notification notification={notification} />
      <ImageResult resultImage={resultImage} />

    </div>
  )
}

export default Index