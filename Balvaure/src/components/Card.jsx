import React from "react";
import { NavLink } from "react-router-dom";
const Card = (
    {
        vendor,
        image,
        description,
        Price,
        originalPrice,
        offer
    }
) => {
    return (
        <>
            <NavLink to="/Men2">
                <div className=' mt-5 border border-gray-800 rounded-md  md:h-[480px] w-44 sm:w-56 md:w-72'>
                    <div>
                        <img className='md:h-[390px] w-full h-full md:w-72' src={image} alt="polo t-shirt" />
                    </div>
                    <div className='pl-2'>
                        <div className='text-xl font-thin italic'>{vendor}</div>
                        <div className='text-gray-500 pb-2'> {description} </div>
                        <div className="pb-2">
                        <span className='font-bold  '>₹{Price} </span>
                        <span className='line-through text-gray-500'> ₹{originalPrice}</span>
                        <span className='text-green-400'>{offer} </span>
                        </div>
                        
                    </div>
                </div>
            </NavLink>
        </>
    )
}

export default Card;