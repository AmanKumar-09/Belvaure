import React, { useRef, useState } from 'react'
import tshirt from '../assets/tshirt1.jpg'
import Card from './Card'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const cardData = [
  {
    id: 1,
    vendor: "Belvaure",
    image: tshirt,
    description: "Oversized Classsic T-Shirt",
    Price: 899,
    originalPrice : 999,
    offer: "40%"
  },
  {
    id: 2,
    vendor: "Belvaure",
    image: tshirt,
    description: "Oversized Classsic T-Shirt",
    Price: 899,
    originalPrice : 999,
    offer: "40%"
  },
  {
    id: 3,
    vendor: "Belvaure",
    image: tshirt,
    description: "Oversized Classsic T-Shirt",
    Price: 899,
    originalPrice : 999,
    offer: "40%"
  },
  {
    id: 4,
    vendor: "Belvaure",
    image: tshirt,
    description: "Oversized Classsic T-Shirt",
    Price: 899,
    originalPrice : 999,
    offer: "40%"
  },
  {
    id: 5,
    vendor: "Belvaure",
    image: tshirt,
    description: "Oversized Classsic T-Shirt",
    Price: 899,
    originalPrice : 999,
    offer: "40%"
  },
  {
    id: 6,
    vendor: "Belvaure",
    image: tshirt,
    description: "Oversized Classsic T-Shirt",
    Price: 899,
    originalPrice : 999,
    offer: "40%"
  },
  {
    id: 7,
    vendor: "Belvaure",
    image: tshirt,
    description: "Oversized Classsic T-Shirt",
    Price: 899,
    originalPrice : 999,
    offer: "40%"
  },
  {
    id: 8,
    vendor: "Belvaure",
    image: tshirt,
    description: "Oversized Classsic T-Shirt",
    Price: 899,
    originalPrice : 999,
    offer: "40%"
  },
  {
    id: 9,
    vendor: "Belvaure",
    image: tshirt,
    description: "Oversized Classsic T-Shirt",
    Price: 899,
    originalPrice : 999,
    offer: "40%"
  },
  {
    id: 10,
    vendor: "Belvaure",
    image: tshirt,
    description: "Oversized Classsic T-Shirt",
    Price: 899,
    originalPrice : 999,
    offer: "40%"
  },
  {
    id: 11,
    vendor: "Belvaure",
    image: tshirt,
    description: "Oversized Classsic T-Shirt",
    Price: 899,
    originalPrice : 999,
    offer: "40%"
  },
  {
    id: 12,
    vendor: "Belvaure",
    image: tshirt,
    description: "Oversized Classsic T-Shirt",
    Price: 899,
    originalPrice : 999,
    offer: "40%"
  },
]




function CardMain() {
  
  const itemstoshow = 3;
  const [slide,setslide] = useState(0);

  const nextslide = () =>{
    setslide(prevSlide => (prevSlide + 1) % Math.ceil(cardData.length / itemstoshow));
  }

  const prevslide = () =>{
    setslide(prevSlide => (prevSlide - 1 + Math.ceil(cardData.length / itemstoshow)) % Math.ceil(cardData.length / itemstoshow));
  }

  return (
    <div className='relative '>
  
  <button className='absolute top-1/2 left-0  bg-transparent text-4xl text-white p-2 rounded-full z-10'
    onClick={prevslide}
  >
  <IoIosArrowBack />
  </button>
 
    <div className='flex  overflow-hidden'>
      
   <div className='flex gap-3 px-2 transition-all duration-all' style={{
            transform : `translateX(-${slide * 100/itemstoshow}%)`
          }}>
   {
        cardData.map(( data) =>(
          <Card  key={data.id} {...data} />
        ))
      }
   </div>


  </div>
  <button className='absolute top-1/2 text-4xl right-0  bg-transparent text-white p-2 rounded-full z-10'
    onClick={nextslide}
  ><IoIosArrowForward /></button>

     
        
    </div>
  )
}

export default CardMain;