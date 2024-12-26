import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaUser } from "react-icons/fa";import { CiHeart } from "react-icons/ci";
import { TiShoppingBag } from "react-icons/ti";
import logo from "../assets/logo2.jpg"
import '../App.jsx';
function Header() {
 
    const links = [
        {
            name:"MEN",
            route:""
        },
        {
            name:"WOMEN",
            route:""
        },
        {
            name:"KIDS",
            route:""
        },
        {
            name:"HOME & Living",
            route:""
        },
        {
            name:"BEAUTY",
            route:""
        },
        {
            name:"STUDIO",
            route:""
        },

    ]

    const links2 = [
        {
            name:"login",
            icon:<FaUser />,
            route:""
        },
        {
            name:"Wishlist",
            icon:<CiHeart />,
            route:""
        },
        {
            name:"Bag",
            icon:<TiShoppingBag />,
            route:""

        }
    ]
     
  return (
    <div className='   gap-2 h-[100px]  w-full shadow-lg  ' >
          <div className='p-3 flex-col md:flex-row flex overflow-hidden items-center  h-full w-full'>
            <div className='flex '>
        <div className=' p-3'>
            <img className='w-[150px] h-[100%]' src={logo} alt="logo" />
        </div>
        <div className='md:ml-3  flex gap-8 md:p-4'>
          {
            links.map((link,index) =>{
                return <div  key={index}>{link.name}</div>
            })
          }

        </div>
        
        </div>
        <div className=' sm:ml-6 sm:p-4 overflow-hidden'>
            <input className='bg-gray-100 rounded-sm md:w-96 placeholder-gray-600 md:p-2 ' type="text" placeholder='Search for products, brands and more' />
        </div>
        <div className='  md:gap-6 hidden md:flex ml-28'>
            {links2.map((link,index) =>{
                return <div  key={index} className='flex flex-col items-center gap-1 cursor-pointer'>
                    <div>{link.icon}</div>
                    <span>{link.name}</span>
                </div>
            })}
        </div>
      </div>
    </div>
  )
}

export default Header