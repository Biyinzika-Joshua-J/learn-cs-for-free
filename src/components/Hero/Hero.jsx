import React from 'react'
import './Hero.css'
import { Search } from '..'

const Hero = () => {
  return (
    <div className='h-[85vh] w-[100vw] bg-black'>
      <div className="hero-img w-[100%] h-[100%] flex justify-center items-center text-white" >
          <div className="">
            <h1 className="text-5xl text-center font-bold pb-4">
              Learn <span className="text-[#3b82f6]">Computer Science</span>: The Free Way
            </h1>
            <Search/>
          </div>
      </div>
    </div>
  )
}

export default Hero