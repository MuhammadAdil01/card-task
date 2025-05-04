import React from 'react'

export default function Section3() {
  return (
  <>
  <div className='min-h-screen w-full'>
    <div className="m-0 px-4 sm:px-6 py-6 mb-2.5">
      <h1 className='text-gray-800 text-3xl sm:text-4xl md:text-5xl font-semibold font-mono text-center'>Order Now?</h1>
      <div className="h-0.5 w-[20%] sm:w-[15%] md:w-[10%] bg-red-500 mt-2 mx-auto"></div>
    </div>
    
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-4 sm:px-6">
      <div className="w-full md:w-[45%]">
        <img 
          src="./public/Images/pic1.webp" 
          alt="Greeting card" 
          className="w-full h-auto object-cover"
          style={{ maxHeight: '70vh' }}
        />
      </div>
      
      {/* part2 */}
      <div className='w-full md:w-[50%]'>
        <div className='w-full p-4 sm:p-6'>
          <h1 className='text-gray-800 text-3xl sm:text-4xl md:text-5xl font-sans font-semibold'>Real Greeting Cards</h1>
          <div className="h-0.5 w-[30%] sm:w-[25%] md:w-[19%] rounded-2xl bg-red-500 mt-4"></div>
          <p className='text-gray-800 mt-6 p-2 text-base sm:text-lg'>An amazing collection of high-quality card made from 100% recycled material.</p>
        </div>
        {/* part 3 */}
        <div className='w-full p-4 sm:p-6'>
          <p className='text-red-400 text-xl sm:text-2xl'>Get our special offer - 30% off</p>
          <button className="bg-white rounded-full mt-4 hover:text-white hover:bg-red-400 border-2 font-serif border-red-400 text-red-400 font-bold py-2 sm:py-3 px-8 sm:px-14 cursor-pointer transition-colors duration-300">
            Get Started Today!    
          </button>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}