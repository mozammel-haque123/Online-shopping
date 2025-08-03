// src/components/Smallcard.jsx
import React, { useState } from 'react'
import tabData from '../data/../../../public/smalldata.json'        
import { AiOutlineHeart, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import hot from '../../assets/screenshot.png'
import cardsmulti from '../../assets/cardsmulti.png'
export default function Smallcard() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="w-full px-4 py-8 bg-white relative">
      {/* ==== ট্যাব বার ==== */}
      <div className="flex items-center justify-between mb-6  border-b-2 border-gray-100">
        <div className="flex space-x-8">
          {tabData.map((tab, idx) => (
           
           <div>
            <button
              key={tab.id}
              onClick={() => setActiveTab(idx)}
              className={`
                relative pb-2 font-medium transition text-xl 
                ${activeTab === idx
                  ? 'text-amber-400'
                  : 'text-gray-400 hover:text-amber-400'}
              `}
            >
              {tab.label}
              {/* active ট্যাবের নিচে আন্ডারলাইন */}
            </button>

                {activeTab === idx && (
              <div className="h-8 rounded-full overflow-hidden flex justify-center">
          <img src={hot} alt="tip" className="w-[100px] h-[6px]" />
            </div> 
              )}
            </div>

          ))}
        </div>
        {/* ন্যাভিগেশন অ্যারো */}
 <div className="lg:flex items-center space-x-2 text-gray-400 absolute right-[360px] top-[170px] hidden">

          <AiOutlineLeft className="w-6 h-6 cursor-pointer hover:text-gray-600" />
          <AiOutlineRight className="w-6 h-6 cursor-pointer hover:text-gray-600" />
        </div>
      </div>

      {/* ==== প্রোডাক্ট + প্রোমো গ্রিড ==== */}
      <div className="flex flex-col md:flex-row justify-between">
        {/* প্রোডাক্ট কার্ড গ্রুপ (৩ কলাম) */}
    <div class="grid grid-cols-1  md:grid-rows-3 md:grid-flow-col md:auto-cols-fr gap-x-30">
          {tabData[activeTab].items.map(item => (
  <div
  key={item.id}
  className="relative flex items-center space-x-4 bg-white group overflow-hidden transition"
>
  {/* ইমেজ */}
  <img
    src={item.image}
    alt={item.name}
    className="w-28 h-18 object-contain"
  />

  {/* Overlay effect */}
  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-35 transition duration-300 ease-in-out pointer-events-none" />

  {/* নাম ও প্রাইস */}
  <div>
    <h4 className="text-gray-800 font-semibold">{item.name}</h4>
    <p className="text-blue-600 font-bold">
      ${item.price.toFixed(2)}
    </p>
  </div>
</div>

          ))}
        </div>

        {/* প্রোমো কার্ড (ডান পাশে) */}
 <div className="relative group overflow-hidden bg-white p-6 rounded-lg">
  <img
    src={cardsmulti}
    alt="Promo"
    className="w-[300px] h-auto object-cover rounded"
  />
  <span
    className="
      absolute inset-0
      w-[400%] h-[200%]
      bg-white opacity-40
      transform rotate-45 translate-x-full -translate-y-full
      group-hover:-translate-x-full group-hover:translate-y-full
      transition-transform duration-[2000ms] ease-in-out
      pointer-events-none
    "
  />
</div>

      </div>
    </div>
  )
}
