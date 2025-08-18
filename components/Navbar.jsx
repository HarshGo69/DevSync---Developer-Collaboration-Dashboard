import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'

const Navbar = () => {
   const router = useRouter();
  return (
   <>
   <nav className='fixed px-5 py-7 w-full flex items-center justify-between bg-transparent border-b border-white/20 z-10'>
    <div className='px-15 flex gap-3 pb-[-4]'>
      <a href="#top"> <Image alt="logo" width={200}
              height={200} src={"/images/DevSync_hexa_logo-removebg-preview.png"} className='w-9 h-9 rotate'/>  </a>
      <a href="#top"><Image width={200}
              height={200} src={"/images/DevSync_logo-removebg-preview.png"} className='w-full h-9'/></a>
    </div>
    <div className='flex gap-8 px-15 items-center'>
      <a href="#about" className='text-white hover:text-white/80 text-lg'>About</a>
      <a href="#generate" className='text-white hover:text-white/80 text-lg'>Generate</a>
      <div onClick={() => router.push('/compo/Login')} className='bg-[#D8D8D8] border rounded-lg border-white/30 py-2 w-35 text-center cursor-pointer hover:bg-[#CCCCCC]'
      ><a href="#login" className='text-black font-medium '>Login | Sign up</a></div>
    </div>
   </nav>
   </>
  )
}

export default Navbar