import React from 'react'

const Header = () => {
  return (
    <div className='h-[100vh] w-full top-0 left-0'>
        <div className='px-30 py-140'> 
            <a href="#contact" className=' text-white text-lg'>Contact ↗</a>
        </div>
     <div className="absolute inset-0 flex items-center justify-center top-[-30vh]">
        <h1 className="text-5xl font-black text-center text-[#D8D8D8] gradient-text">
          TEAM COLLABORATION REIMAGINED
        </h1>
      </div>

    </div>
  )
}

export default Header