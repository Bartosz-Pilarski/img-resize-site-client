const ImageFormExtension = ({ extensionName, extensionState, handleExtensionChange }) => {
  //SVG is read-only
  if(extensionName === 'svg') return null

  return(
    <>
      <input 
        required
        type="radio" 
        name="extension" 
        id={`image-extension-${extensionName}`} 
        value={extensionName} 
        checked={ extensionState === extensionName } 
        onChange={handleExtensionChange} 
      />
      <label htmlFor="image-extension-jpg">
        {`.${extensionName}`}
      </label>
    </>
  )
}

export default ImageFormExtension