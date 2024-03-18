const ImageFormExtension = ({ extensionName, extensionState, handleExtensionChange }) => {
  return(
    <>
      <input 
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