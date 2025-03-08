import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegHeart, FaStar } from "react-icons/fa";

const Card = ({ vendor, image, description, Price, originalPrice, offer }) => {
  return (
    <NavLink to="/Men2" className="no-underline">
      <div className="relative mt-5 border border-gray-300 rounded-lg overflow-hidden w-44 h-[500px] sm:w-56 md:w-72 flex flex-col">
        
        {/* Badge */}
        <div className="absolute top-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-sm">
          BOYFRIEND FIT
        </div>

        {/* Wishlist Icon */}
        <div className="absolute top-2 right-2 text-gray-600 text-lg cursor-pointer hover:text-red-500">
          <FaRegHeart />
        </div>

        {/* Product Image - Increased Height */}
        <div className="h-[90%]">
          <img className="w-full h-full object-cover" src={image} alt="product" />
        </div>

        {/* Product Info - Reduced Height */}
        <div className="p-2 bg-white h-[15%]">
          
          {/* Rating */}
          <div className="flex items-center text-yellow-500 text-sm">
            <FaStar />
            <span className="ml-1 text-gray-700 font-semibold">4.5</span>
          </div>

          {/* Vendor Name */}
          <div className="text-sm font-semibold  truncate">{vendor}</div>

          {/* Pricing */}
          <div className="">
            <span className="font-bold text-base">₹{Price}</span>
            <span className="line-through text-gray-500 text-xs ml-2">
              ₹{originalPrice}
            </span>
            <span className="text-green-500 text-xs ml-2">{offer} OFF</span>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
