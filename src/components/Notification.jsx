const Notification = ({ notification }) => {
  const { isError, content } = notification
  
  if(content === null) return null

  const style = `
    text-3xl
    rounded-md
    mx-auto p-2 mt-6 -mb-6
  `
  const errorStyle = style+'bg-rose-600'
  const successStyle = style+'bg-emerald-600'

  return (
    <h2 className={isError ? errorStyle : successStyle}>
      {content}
    </h2>
  )
}

export default Notification