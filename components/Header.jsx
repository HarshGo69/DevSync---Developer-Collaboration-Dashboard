import React from 'react'

const Header = () => {
  return (
    <div className='h-[100vh] w-full top-0 left-0 relative border border-b border-white/30'>
    
      {/* Heading */}
      <div className="absolute inset-0 flex items-center justify-center top-[-30vh]">
        <h1 className="text-6xl font-extrabold text-center text-[#D8D8D8]">
          TEAM COLLABORATION REIMAGINED
        </h1>
      </div>

      {/* Paragraph + Button */}
      <div className='flex flex-col items-center justify-center absolute inset-0 top-[12vh] w-full text-center space-y-6 leading-8'>
        <p className='text-[#888888] text-xl'>
          Build, collaborate, and ship faster with your team.
          <br /> Real-time updates, seamless task management, and powerful <span className='text-white'>collaboration</span> tools.
        </p>

        {/* Button now sits BELOW paragraph */}
        <div className='bg-[#D8D8D8] border rounded-lg border-white/30 px-5 py-2 w-35 cursor-pointer hover:bg-[#CCCCCC]'>
          <a href="#login" className='text-black font-medium '>Get Started</a>
        </div>
      </div>
      
      <div className='flex items-center justify-center bottom-[20vh] bottom-[-50vh] absolute w-full gap-8 transition-all duration-500 ease-in-out '>
      <div className='bg-transparent border rounded-lg border-white/20 px-5 py-3 w-55 text-center hover:bg-[#1F1F1F]'>
          <a href="#login" className='text-white font-medium'>Real time collaboration</a>
        </div>
        <div className='bg-transparent border rounded-lg border-white/20 px-5 py-3 w-35 text-center hover:bg-[#1F1F1F]'>
          <a href="#login" className='text-white font-medium'>Team Chat</a>
        </div>
        <div className='bg-transparent border rounded-lg border-white/20 px-5 py-3 w-45 text-center hover:bg-[#1F1F1F]'>
          <a href="#login" className='text-white font-medium'>Task Mangement</a>
        </div>
        <div className='bg-transparent border rounded-lg border-white/20 px-5 py-3 w-45 text-center hover:bg-[#1F1F1F]'>
          <a href="#login" className='text-white font-medium'>Project Update</a>
        </div>
        </div>
    </div>
  )
}

export default Header
