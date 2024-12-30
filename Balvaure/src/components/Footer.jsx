import React from 'react'
import { IoIosPhonePortrait } from "react-icons/io";

function Footer() {
  return (
    <>
    <div className='w-full bg-red-500 text-white text-4xl p-4 mt-12 mb-12 text-center'>HOMEGROWN INDIAN BRAND</div>
    <div className='w-full bg-gray-200'>
      
      <div className='w-full pt-4'>
      <div className="grid grid-cols-2 md:grid-cols-4 w-[80%] m-auto gap-8">
       <div>
          <h4 className='font-bold text-red-500'>NEED HELP</h4>
          <p className='font-bold text-gray-600'>Contact Us</p>
          <p className='font-bold text-gray-600'>Track Order</p>
          <p className='font-bold text-gray-600'>Returns & Refunds</p>
          <p className='font-bold text-gray-600'>FAQS</p>
          <p className='font-bold text-gray-600'>My Account</p>
        </div>
        <div>
          <h4 className='font-bold text-red-500'>COMPANY</h4>
          <p className='font-bold text-gray-600'>About Us</p>
          <p className='font-bold text-gray-600'>Careers</p>
          <p className='font-bold text-gray-600'>Gift Vouchers</p>
          <p className='font-bold text-gray-600'>Community Initiatives</p>
          <p className='font-bold text-gray-600'>Belvaure Army</p>
        </div>
        <div>
          <h4 className='font-bold text-red-500'>MORE INFO</h4>
          <p className='font-bold text-gray-600'>T&C</p>
          <p className='font-bold text-gray-600'>Privacy Policy</p>
          <p className='font-bold text-gray-600'>Sitemap</p>
          <p className='font-bold text-gray-600'>Blogs</p>
        </div>
        <div>
          <h4 className='font-bold text-red-500'>STORE NEAR ME</h4>
          <p className='font-bold text-gray-600'>Mumbai</p>
          <p className='font-bold text-gray-600'>Ludhiana</p>
          <p className='font-bold text-gray-600'>Delhi</p>
          <p className='font-bold text-gray-600'>Chandigarh</p>
        </div>
       </div>
      </div>
      {/* experiencesection */}
      <div className='w-full  text-center'>
         <h5 className=' p-3  m-auto   font-bold text-gray-600 flex items-center justify-center'>
           <IoIosPhonePortrait />
            EXPERIENCE BELVAURE APP</h5>
      </div>
     

    </div>
    </>
  )
}

export default Footer