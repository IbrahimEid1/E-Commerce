import React from 'react'
import Image from "../../assets/Man.jpg"
import ImageTwo from "../../assets/Clock.png"
import { MessageSquare } from "lucide-react";


const Cardsbtm = () => {
  return (
    <section className='flex flex-col md:flex-row min-w-0 h-auto gap-3 md:gap-3 w-full'>
      <div className="btm w-full md:w-[50%] flex flex-col">
        <img 
          src={Image} 
          alt="Stylish young man" 
          className='w-full h-48 md:h-auto object-cover rounded-t-lg md:rounded-none'
        />
        <div className="px-3 md:px-2 py-2">
          <p className="text-yellow-600 text-xs md:text-sm py-1 md:py-2 uppercase">tech</p>
          <p className="text-gray-900 text-sm md:text-[16px] leading-5 md:leading-6 font-bold mb-2">
            Stylish young man out in town
          </p>
          <p className="text-gray-600 text-xs md:text-[14px] leading-5 md:leading-6">
            In the heart of the bustling city, a stylish young man navigates the urban landscape with an air of contemporary confidence. His ensemble effortlessly captures the essence of city chic...
          </p>
        </div>
        <div className="flex mt-1 px-3 md:px-2 pb-3 md:pb-0 text-zinc-400 items-center">
          <p className="text-[11px] md:text-[12px] leading-5 mr-2">4 hours ago</p>
          <MessageSquare width={14} className="fill-zinc-500 text-white flex-shrink-0" />
          <p className="text-[11px] md:text-[12px] ml-1">10</p>
        </div>
      </div>

      <div className="btm w-full md:w-[50%] flex flex-col">
        <img 
          src={ImageTwo} 
          alt="Smartwatch" 
          className='w-full h-48 md:h-[52%] object-cover rounded-t-lg md:rounded-none' 
        />
        <div className="px-3 md:px-2 py-2">
          <p className="text-yellow-600 text-xs md:text-sm py-1 md:py-2 uppercase">tech</p>
          <p className="text-gray-900 text-sm md:text-[16px] leading-5 md:leading-6 font-bold mb-2">
            Aptkdoe Smartwatch Women Men
          </p>
          <p className="text-gray-600 text-xs md:text-[14px] leading-5 md:leading-6">
            It seems like you've mentioned "Aptkdoe Smartwatch" in combination with "Women" and "Men." However, as of my last knowledge update in September 2021, I don't have specific...
          </p>
        </div>
        <div className="flex mt-1 px-3 md:px-2 pb-3 md:pb-0 text-zinc-400 items-center">
          <p className="text-[11px] md:text-[12px] leading-5 mr-2">4 hours ago</p>
          <MessageSquare width={14} className="fill-zinc-500 text-white flex-shrink-0" />
          <p className="text-[11px] md:text-[12px] ml-1">10</p>
        </div>
      </div>
    </section>
  )
}

export default Cardsbtm