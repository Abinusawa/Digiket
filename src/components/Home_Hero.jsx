import React from 'react'
import Button from '../assets/button'
import Hero from '../assets/images/hero.png'
import Pattern from '../assets/images/pattern.png'
import Review_tape from '../assets/images/review_tape.png'
import Avatar from '../assets/images/Avatar.png'

const Home_Hero = () => {
  return (
    <>
      <div className='home__hero container h-[800px] flex gap-10  items-center justify-center'>
        <div className='home__hero content w-[40%] leading-7 '>
          <p className='hero__intro text-xs font-semibold text-[#FF7F49]'>👋 Hey there! We’re Digiket</p>
          <br />
          <h1 className='text-4xl leading-10 font-bold animate-pulse space-x-4'>High-Impact SEO Strategies for Business Growth</h1>
          <br />
            <p className=''>Ever-evolving digital landscape, our SEO agency stands forefront innovation, 
            utilizing cutting-edge AI technologies to drive unparalleled search engine performance.</p>
          
          <br />
          <div className='hero__buttons flex gap-4 '>
          <Button 
          // onClick={handleClick} 
          className='animate-bounce'
          variant="primary" size="md">
            Our Services
          </Button>

          <Button 
          // onClick={handleClick} 
          variant="secondary" size="md">
            About Us
          </Button>
          </div>


        </div>

        <div className='hero__image' style={{ backgroundImage: `url(${Pattern})`, height: '500px'}} >
          <img src={Hero} alt="Hero Image" className="" style={{ height: '600px' }}/>
          <img src={Avatar} alt="Avartar" className="relative bottom-[350px] left-200" style={{ height: '200px' }}/>
          <img src={Review_tape} alt="Review tape" className="relative bottom-[330px] left-[10px]" style={{ height: '180px' }}/>
          
        </div>

        
      </div>
    </>
  )
}

export default Home_Hero
