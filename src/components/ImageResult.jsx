const ImageResult = ({ resultImage }) => {
  const style = `
  flex flex-col 
  justify-center 
  object-none
  text-slate-500 font-bold 
  bg-slate-800
  ${ resultImage !== '/' ? 'p-0' : 'p-16' }
  min-w-64 
  min-h-64
  max-w-screen-lg
`

  return (
  <div className='mx-auto border-2 border-emerald-700 rounded-md my-12'>
    <h2 className="bg-emerald-700 text-xl font-bold p-2"> Result: </h2>
    <div className="overflow-scroll max-w-5xl max-h-5xl" style={{maxHeight: 1024, maxWidth: 1024}}>
      <img className={style} src={resultImage} onClick={() => resultImage !== '/' ? window.location = resultImage : false} alt="Your result will be here" />
    </div>
  </div>
  )
}

export default ImageResult