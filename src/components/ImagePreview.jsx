const ImagePreview = ({ selectedImage }) => {
  const style = `
    flex flex-col 
    justify-center 
    text-slate-500 font-bold 
    bg-slate-800
    ${ selectedImage ? 'p-0' : 'p-16' }
    min-w-64 
    max-w-screen-lg
  `
  return (
    <div className={style}>
      <img src={selectedImage ? URL.createObjectURL(selectedImage) : ''} alt={selectedImage ? 'User-selected image' : 'This is where your image preview will be'} />
    </div>
  )
}

export default ImagePreview