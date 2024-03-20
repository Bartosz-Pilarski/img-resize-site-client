import { Routes, Route } from "react-router-dom"

import Navigation from "./components/layout/Navigation"
import Index from "./components/views/Index"
import About from "./components/views/About"
import Footer from "./components/layout/Footer"

function App() {


  return (
    <div className='flex flex-col text-white h-screen'>
      <Navigation />
      
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
