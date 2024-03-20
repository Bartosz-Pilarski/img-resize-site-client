const Notification = ({ notification }) => {
  const { isError, content } = notification
  
  if(content === null) return null

  return (
    <div>
      {isError ? 'ERROR!' : null}
      {content}
    </div>
  )
}

export default Notification