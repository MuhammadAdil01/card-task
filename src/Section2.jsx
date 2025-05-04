import React from 'react'

function Section2() {
  return (
    <div className='bg'>
      <div className="w-full h-[30vh] md:h-[46vh] flex items-end justify-center text-center px-4">
        <h1 className="relative z-[1] text-white font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          HEARTFELT MOMENTS MADE EASY
        </h1>
      </div>
      {/* part 2 */}
      <div className='h-auto md:h-[30vh] w-full relative py-8 md:py-0'>
        <div className='h-auto md:h-[110px] w-full md:w-[80%] lg:w-[50%] flex justify-center items-end m-auto px-4'>
          <h1 className='text-white text-xl sm:text-2xl font-serif font-semibold text-center'>
            AI Powered Greeting Cards With A Human Touch
          </h1>
        </div>

        <div className='flex flex-col sm:flex-row justify-center items-center gap-4 mt-5 px-4'>
          <button className="bg-red-400 hover:text-red-500 hover:bg-white hover:border-2 border-red-400 text-white font-bold cursor-pointer py-2 sm:py-3 px-8 sm:px-14 rounded font-serif w-full sm:w-auto">
            Subscribe
          </button>
          <button className="bg-white hover:text-white hover:bg-red-400 border-2 font-serif border-red-400 text-red-400 font-bold py-2 sm:py-3 px-8 sm:px-14 cursor-pointer rounded w-full sm:w-auto">
            Generate Card
          </button>
        </div>
      </div>
    </div>
  )
}

export default Section2