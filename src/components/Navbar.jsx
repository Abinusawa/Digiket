import React from 'react'
import Button from '../assets/button'
import  "./styles.css"

const Navbar = () => {
    const styles =  {
         li: 'hover:text-[#FF7F49] transition duration-200 cursor-pointer',
    };

  return (
    <>
        <div className='Navbar container lg:mx-auto p-2 bg-white items-center  border-solid border-2  sm:px-6 lg:px-8 flex justify-between bg'>
            <p className='Logo text-2xl leading-3 font-semibold'>Digiket</p>
            <div>
                <ul className='Nav_Links flex justify-between gap-6 text-sm/[15px] font-semibold'>
                    <li className={styles.li} >All Pages</li>
                    <li className={styles.li}>About</li>
                    <li className={styles.li}>Services</li>
                    <li className={styles.li}>Case Studies</li>
                    <li className={styles.li}>Careers</li> 
                </ul>
            </div>

            <div>
                {/* <button className='Get_Started w-[150px] h-[45px] bg-orange-500 text-sm font-semibold rounded-2xl'>Get Started</button> */}
                <Button 
                     // onClick={handleClick} 
                    variant="primary" size="md">
                    Get Started
                </Button>
            </div>
        
        </div>
    </>
  )
}

export default Navbar
