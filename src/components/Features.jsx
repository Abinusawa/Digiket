import React from 'react'
import './styles.css'
import Card_list from '../assets/Cards/Card_list'
import { fcard_data } from '../assets/Cards/cards_data'

const Features = () => {
  return (
    <>
        <div className='Features container bg-white w-auto h-auto border-solid border-2'>
            <p className='Features_Title'>AI-Enhanced SEO Optimize,
            Analyze, & Dominate</p>
            <div className="Features_Cards flex  justify-center items-center gap-4 p-4">
              <Card_list features={fcard_data} />
            </div>


            {/* <div className='Features_Cards  '>
              <Card_list 
              features={fcard_data} />
            </div> */}

        </div>
    </>
  )
}

export default Features
