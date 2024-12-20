import React from 'react'
import Home_Hero from '../components/Home_Hero'
import Features from '../components/Features'
import './header.css'

const Home_Header = () => {
  return (
    <>
        <div className="home_header container mx-auto w-full px-2 sm:px-6 lg:px-8 " >
            <Home_Hero />
            <Features />
            {/* <Clientele /> */}
            {/* <Main_Feature /> */}
        </div>
    </>
  )
}

export default Home_Header
