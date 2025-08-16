import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
   <>
   <nav className='fixed px-5 py-7 w-full flex items-center justify-between bg-transparent border-b border-white/20 z-10'>
    <div className='px-15 flex gap-3 pb-[-4]'>
      <a href="#top"> <Image alt="logo" width={200}
              height={200} src={"/images/DevSync_hexa_logo-removebg-preview.png"} className='w-9 h-9 rotate'/>  </a>
      <a href="#top"><Image width={200}
              height={200} src={"/images/DevSync_logo-removebg-preview.png"} className='w-full h-9'/></a>
    </div>
    <div className='flex gap-8 px-15'>
      <a href="#about" className='text-white hover:text-white/80 text-lg'>About</a>
      <a href="#generate" className='text-white hover:text-white/80 text-lg'>Generate</a>
    </div>
   </nav>
   </>
  )
}

export default Navbar