import React from 'react'
import tshirt from '../assets/tshirt1.jpg'
import Card from './Card'

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
  return (
    <div className='card-container grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 p-4  '>

      {
        cardData.map(( data) =>(
          <Card key={data.id} {...data} />
        ))
      }
        
    </div>
  )
}

export default CardMain;