// src/components/Navbar2.jsx
import React, { useState, useEffect } from 'react'
import tabData from '../data/../../../public/nav2data.json'        // <-- JSON ফাইল সঠিক path
import { AiOutlineHeart } from 'react-icons/ai'
import watch from '../../assets/handwatch2.png'
import toplep from '../../assets/laptop3.png'

// Countdown component
function Countdown({ end }) {
  const calc = () => {
    const diff = Math.max(0, new Date(end) - new Date())
    const secs = Math.floor((diff / 1000) % 60)
    const mins = Math.floor((diff / 1000 / 60) % 60)
    const hrs  = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    return { days, hrs, mins, secs }
  }

  const [timeLeft, setTimeLeft] = useState(calc())

  useEffect(() => {
    const tid = setInterval(() => setTimeLeft(calc()), 1000)
    return () => clearInterval(tid)
  }, [end])

  const pad = n => String(n).padStart(2, '0')

  return (
    <div className="flex justify-center space-x-4">
      {['days','hrs','mins','secs'].map((k, i) => (
        <div key={i} className="text-center">
          <div className="bg-yellow-400 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
            {pad(timeLeft[k])}
          </div>
          <div className="text-xs mt-1 uppercase text-gray-600">
            {k === 'hrs'   ? 'Hours'
           : k === 'mins'  ? 'Minutes'
           : k === 'secs'  ? 'Seconds'
           : 'Days'}
          </div>
        </div>
      ))}
      
    </div>
  )
}

export default function Navbar2() {
  const [activeTab, setActiveTab] = useState(0)

  return (

   
    <div className="w-full mx-auto bg-gray-100  border">
      {/* ==== বোতাম বার ==== */}
      <div className="flex justify-end space-x-3 mb-8">
        {tabData.map((tab, idx) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(idx)}
            className={`
              px-4 py-2 rounded-full font-medium transition
              ${activeTab === idx
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className='flex flex-col md:flex-row items-center gap-2'>

    <div>

    <div className="flex  justify-between items-center  bg-white rounded-xl shadow-lg">
      {/* Text Content */}
      <div className="p-6 flex flex-col justify-center">
        <p className="text-blue-600 font-medium mb-1">Basic Gift Idea</p>
        <p className="text-gray-600 text-sm mb-1">Mini Two Wheel</p>
        <h3 className="text-2xl font-bold mb-4">Self Balancing Scooter</h3>
        <button className="inline-block bg-yellow-400 text-white font-semibold px-5 py-2 rounded-lg hover:bg-yellow-500 transition">
          Go Shop
        </button>
      </div>

      {/* Image */}
      <div className="">
        <img
          src={watch}
          alt="Self Balancing Scooter"
          className=" h-80 md:h-60 md:w-64"
        />
      </div>
    </div>   
{/*  */}




    <div className="flex  justify-between items-center  bg-white rounded-xl shadow-lg">
      {/* Text Content */}
      <div className="p-6 flex flex-col justify-center">
        <p className="text-blue-600 font-medium mb-1">Basic Gift Idea</p>
        <p className="text-gray-600 text-sm mb-1">Mini Two Wheel</p>
        <h3 className="text-2xl font-bold mb-4">Self Balancing Scooter</h3>
        <button className="inline-block bg-yellow-400 text-white font-semibold px-5 py-2 rounded-lg hover:bg-yellow-500 transition">
          Go Shop
        </button>
      </div>

      {/* Image */}
      <div className="">
        <img
          src={toplep}
          alt="Self Balancing Scooter"
          className=" h-80 md:h-60 md:w-64"
        />
      </div>
    </div> 


    </div>

   
    

    


      {/* ==== সক্রিয় ট্যাবের ৩টি কার্ড ==== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full">
        {tabData[activeTab].items.map(item => {
          const total = item.sold + item.available
          const pct   = Math.round((item.sold / total) * 100)

          return (
            <div
              key={item.id}
              className="relative group border p-6 rounded-lg shadow hover:shadow-lg transition "
            >
              {/* Discount badge */}
              <div className="absolute top-4 right-4 gol text-white px-4 py-5 rounded-full z-10 flex flex-col items-center">
             <p className='font-bold'>{pct}</p><p className='font-semibold text-sm'>% Offer</p>
              </div>
              {/* Heart icon */}
              <AiOutlineHeart className="absolute top-4 left-4 text-gray-400 hover:text-red-500 cursor-pointer z-10" />

              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="mx-auto h-40 object-contain mb-4 z-10"
              />

              {/* Name */}
              <h4 className="text-center font-semibold text-lg mb-2 z-10">
                {item.name}
              </h4>

              {/* Prices */}
              <div className="flex justify-center items-baseline space-x-2 mb-4 z-10">
                <span className="line-through text-gray-500">
                  ${item.oldPrice.toFixed(2)}
                </span>
                <span className="text-blue-600 font-bold">
                  ${item.price.toFixed(2)}
                </span>
              </div>

              {/* Sold / Available */}
              <div className="flex justify-between text-sm mb-2 z-10">
                <span>Already Sold: {item.sold}</span>
                <span>Available: {item.available}</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
                <div
                  className="h-full bg-yellow-400 transition-width"
                  style={{ width: `${pct}%` }}
                />
              </div>

              {/* Countdown */}
              <div className="text-center mb-2 z-10">
                <span className="text-yellow-500 font-semibold">
                  Hurry up!
                </span>{' '}
                Offers ends in:
              </div>
              <Countdown end={item.offerEnds} />
            </div>
          )
        })}


        
      </div>

    </div>
    </div>

  )
}
