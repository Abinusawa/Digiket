import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import './App.css'

function App() {


  return (
    <>
      <div className="Apps bg-[#FBF1EC] bg-opacity-50 ">
        <Navbar />
        <Home />
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default App
