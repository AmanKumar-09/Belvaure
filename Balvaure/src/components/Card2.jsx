import React from 'react'
import tshirt1 from '../assets/tshirt1.jpg'
import bewa from '../assets/bewa.webp'
import { IoLocationOutline } from "react-icons/io5";
function Card2() {
  return (
    <div className='flex gap-4  min-h-screen w-[80%] ml-auto mr-auto bg-white justify-center items-start mt-[110px]'>

      <div className=' w-[50%]  flex justify-end items-center '>
        <img className=' md:h-[550px] md:w-96' src={bewa} alt="" />
      </div>

      <div className='w-[50%] flex flex-col justify-center'>
        <div>
          <span className='text-2xl font-bold'>Belv@ure</span>
          <p className='text-gray-400'>Men's Grey Oversized Joggers</p>
        </div>
        <div>
          <span className='font-bold   '>₹999 </span>
          <span className='line-through text-gray-500'> ₹2199</span>
          <span className='text-green-600 text-1xl pl-2'>50% OFF </span>
          <p className='text-gray-400'>inclusive of all taxes</p>
        </div>
        <div className='flex gap-2'>
          <div className='bg-green-500 pl-3 pr-3 text-white pt-1 pb-1'>Buy 2 For 1699</div>
          <div className='bg-gray-400 pl-3 pr-3 text-white pt-1 pb-1'>OVERSIZED FIT</div>
          <div className='bg-white-600 pl-3 pr-3 border text-gray-400 border-gray-600 pt-1 pb-1'>SOFT TERRY COTTON</div>

        </div>
        <div className='mt-3'>
          <span className='font-bold '>Select Size </span>
          <div className="flex gap-2">
            {["S", "M", "L", "XL", "2XL"].map((size) => (
              <div
                key={size}
                className="w-16 h-10 flex justify-center items-center rounded-md border border-black"
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <div className='flex gap-3 mt-3'>
          <div className='bg-yellow-500 w-72 text-center rounded-md text-1xl font-bold p-3'>ADD TO BAG</div>
          <div className='p-3 border border-gray-800 w-72 text-center font-bold rounded-md'>♡ WISHLIST</div>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <IoLocationOutline className='text-2xl' />
          <span className='text-[20px] font-bold'>Check for Delivery Details</span>
        </div>
        <div>
          <input className='border border-gray-600 pt-2 pb-2 pl-3 rounded-md w-[100%]' type="text" placeholder='Enter Pincode' />
        </div>
        <hr className='font-bold h-1' />
        <div>
          <div className='font-bold'> Key Highlights</div>
          <div className='w-[100%] flex mt-4'>
            <div className='w-[50%] text-gray-600'>Design</div>
            <div className='w-[50%] text-gray-600'>Fit</div>
          </div>
          <div className='w-[100%] flex mt-4'>
            <div className='w-[50%] font-bold text-[18px]'>Graphic Print</div>
            <div className='w-[50%] font-bold text-[18px]'>Regular Fit</div>
          </div>

        </div>
        <hr className='font-bold h-1' />
        <div>

          <div className='w-[100%] flex mt-4'>
            <div className='w-[50%] text-gray-600'>Neck</div>
            <div className='w-[50%] text-gray-600'>Occasion</div>
          </div>
          <div className='w-[100%] flex mt-4'>
            <div className='w-[50%] font-bold text-[18px]'>Round Neck</div>
            <div className='w-[50%] font-bold text-[18px]'>Casual Wear</div>
          </div>

        </div>
        <hr className='font-bold h-1' />
        <div>

          <div className='w-[100%] flex mt-4'>
            <div className='w-[50%] text-gray-600'>Sleeve Style</div>
            <div className='w-[50%] text-gray-600'>Wash Care</div>
          </div>
          <div className='w-[100%] flex mt-4'>
            <div className='w-[50%] font-bold text-[18px]'>Half Sleeve</div>
            <div className='w-[50%] font-bold text-[18px]'>Gentle Machine Wash</div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Card2