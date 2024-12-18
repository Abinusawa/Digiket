import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className='Navbar container mx-auto w-[1400px] p-5 bg-white items-center  px-4 sm:px-6 lg:px-8 flex justify-between bg'>
            <p className='Logo'>Digiket</p>
            <div>
                <ul className='Nav_Links flex justify-between'>
                    <li>All Pages</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Case Studies</li>
                    <li>Careers</li>
                </ul>
            </div>

            <div>
                <p className='Get_Started'>Get Started</p>
            </div>
        
        </div>
    </>
  )
}

export default Navbar
