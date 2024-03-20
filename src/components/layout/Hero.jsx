const Hero = () => {
  return (
    <div id="hero" className="flex justify-center mx-auto my-10">
      <div className="
        group
        flex flex-col justify-around
        max-w-2xl 
        px-4 py-6 my-7

        transition-all
        rounded-md border-b-4 border-b-emerald-600 bg-slate-700 border-slate-700
        shadow-xl shadow-emerald-600/50

        hover:shadow-xl hover:shadow-emerald-400/50 hover:border-b-emerald-400
        ">
        <h1 className="text-5xl text-center tracking-tight leading-10 mx-auto mb-6 min-w-96">Resize images anywhere. <br /> <span className="group font-bold text-emerald-500 transition-all group-hover:text-emerald-400">Easily.</span></h1>
        <p className="mx-auto my-auto px-12 text-2xl text-center"> SIZEdown offers an easy solution to image formatting on the go, no installation needed. </p>
      </div>
    </div>
  )
}

export default Hero