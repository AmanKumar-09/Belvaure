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
            route:"/Men"
        },
        {
            name:"WOMEN",
            route:"/Women"
        },
        {
            name:"KIDS",
            route:"/Kids"
        },
        {
            name:"HOME & Living",
            route:"/Home&living"
        },
        {
            name:"BEAUTY",
            route:"/Beauty"
        },
        {
            name:"STUDIO",
            route:"/Studio"
        },

    ]

    const links2 = [
        {
            name:"login",
            icon:<FaUser />,
            route:"/login"
        },
        {
            name:"Wishlist",
            icon:<CiHeart />,
            route:"/wishlist"
        },
        {
            name:"Bag",
            icon:<TiShoppingBag />,
            route:"/bag"

        }
    ]
     
  return (
    <div className='   gap-2 h-[100px]  w-full shadow-lg  ' >
          <div className='md:p-3  md:flex-row flex overflow-hidden items-center  h-full w-full'>
            <div className='flex '>
                <NavLink to={"/"}> <div className=' md:p-3'>
            <img className='w-[150px] h-[100%]' src={logo} alt="logo" />
        </div></NavLink>
       
        <div className='md:ml-3 hidden md:flex   gap-8 md:p-4'>
          {
            links.map((link,index) =>{
                return <NavLink
                 className={({ isActive }) => 
                    isActive ? "text-black no-underline" : "text-black no-underline" 
                  } to={link.route} key={index}>
                    {link.name}
                    </NavLink>
            })
          }

        </div>
        
        </div>
        <div className=' sm:ml-6 sm:p-4 overflow-hidden'>
            <input className='bg-gray-200 rounded-md sm:w-96 placeholder-gray-600 sm:ml-4 focus:outline-none p-2 ' type="text" placeholder='Search for products, brands and more' />
        </div>
        <div className='  md:gap-6 hidden  md:flex ml-28'>
            {links2.map((link,index) =>{
                return <NavLink to={link.route}  key={index} className='flex flex-col text-black no-underline  items-center gap-1 cursor-pointer'>
                    <div>{link.icon}</div>
                    <span>{link.name}</span>
                </NavLink>
            })}
        </div>
      </div>
    </div>
  )
}

export default Header