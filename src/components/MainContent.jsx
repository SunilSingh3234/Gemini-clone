import React from 'react'
import { FaCode, FaCompass, FaLightbulb, FaMicrophone, FaUserCircle } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'
import { IoMdSend } from 'react-icons/io'
import { MdAddPhotoAlternate } from 'react-icons/md'

const Maincontent = () => {
  return (
    <div className='flex-1 min-h-screen pb-[15vh] relative'>
      <div className="flex items-center justify-between text-xl p-5 text-slate-700">
        <p>Gemini</p>
        <FaUserCircle className='' />
      </div>
      <div className='max-w-[900px] mx-auto'>
        <div className='my-12 text-[56px] text-slate-500 font-semibold p-5'>
          <p><span className='bg-gradient-to-r from-[#368ddd] to-[#ff5546] bg-clip-text text-transparent'>Hello, Sunil.</span></p>
          <p className='text-gray-300 text-transparent'>How i help you today?</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
          <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
            <p className="text-slate-700 text-lg">
              Suggeset top 10 webseries.
            </p>
            <FaCompass className="text-4xl p-1 absolute bottom-2 right-2" />
          </div>
          <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
            <p className="text-slate-700 text-lg">
              What is loop in Javascript?
            </p>

            <FaLightbulb className="text-4xl p-1 absolute bottom-2 right-2" />
          </div>

          <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
            <p className="text-slate-700 text-lg">
              Who is known as the "Mother of Dragons"?
            </p>

            <FaMessage className="text-4xl p-1 absolute bottom-2 right-2" />
          </div>

          <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
            <p className="text-slate-700 text-lg">
              Who sits on the Iron Throne at the end of the series?
            </p>

            <FaCode className="text-4xl p-1 absolute bottom-2 right-2" />
          </div>
        </div>
        <div className="absolute bottom-0 w-full max-w-[900px] px-5 mx-auto">
          <div className="flex items-center justify-between gap-20 bg-gray-200 py-2 px-5 rounded-full">
            <input type="text" placeholder='Enter a prompt here...' className='flex-1 bg-transparent border-none outline-none p-2 text-lg' />
            <div className="flex items-center gap-4">
              <MdAddPhotoAlternate className='text-2xl cursor-pointer' />
              <FaMicrophone className='text-2xl cursor-pointer' />
              <IoMdSend className='text-2xl cursor-pointer' />
            </div>
            
          </div><p className="text-sm my-4 mx-auto text-center font-[500] text-slate-600">
              Gemini may display inaccurate info, including about people, so
              double-check its responses.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Maincontent
