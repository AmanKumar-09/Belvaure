import React from 'react'
import tshirt from '../assets/tshirt1.jpg'
function Card() {
  return (
    <div>
        <div className='ml-4 mt-5 border border-gray-800 h-[410px]  w-72'>
            <div>
                <img className='h-[320px] w-72' src={tshirt} alt="polo t-shirt" />
            </div>
            <div className='pl-2'>
                <div className='text-xl font-thin italic'>Belvaure</div>
                <div className='text-gray-500 pb-2'>Men's Z-Black Polo T-shirt </div>
                <span className='font-bold  '>₹449 </span>
                <span className='line-through text-gray-500'> ₹1499</span>
                <span className='text-green-400'> 70% OFF</span>
            </div>
        </div>
    </div>
  )
}

export default Card