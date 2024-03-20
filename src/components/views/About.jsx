import Hero from '../layout/Hero'

const About = () => {
  const baseParagraphStyle = `  
    flex 
    justify-center
    bg-slate-700 
    rounded-md border-b-2 border-emerald-600 
    h-32
    py-2 px-8 mx-32
  `
  const paragraphStyle = baseParagraphStyle+'flex-row'
  const oddParagraphStyle = baseParagraphStyle+'flex-row-reverse'

  const headerStyle = `
    text-4xl
    font-bold
    my-auto mx-24
  `
  const textblockStyle = `
    text-xl
    my-auto
  `

  //Won't extract this into components since they won't be reused much
  return (
    <div>
      <Hero />
      <div className="flex flex-col space-y-12 mb-12">
        <div className={paragraphStyle}>
          <h2 className={headerStyle}> <span className="text-emerald-500"> Free </span> online image resizing </h2>
          <div className={textblockStyle}>
            <p> SIZEdown offers free of charge, and ads, image resizing online. </p>
            <p> We don&apos;t collect your images or data - anything you upload is wiped from the server within 15 minutes. </p>
          </div>
        </div>
        <div className={oddParagraphStyle}>
          <h2 className={headerStyle}> <span className="text-emerald-500"> open</span>-source </h2>
          <div className={textblockStyle}>
            <p> We have nothing to hide. </p>
            <p> You can see our entire source code on GitHub. </p>
          </div>
        </div>
        <div className={paragraphStyle}>
          <h2 className={headerStyle}> Lorem <span className="text-emerald-500">Ipsum</span> </h2>
          <div className={textblockStyle}>
            <p> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About