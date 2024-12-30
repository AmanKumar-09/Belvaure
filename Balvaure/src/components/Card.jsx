import React from "react";

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
            <div>
                <div className='ml-4 mt-5 border border-gray-800 h-[410px]  w-72'>
                    <div>
                        <img className='h-[320px] w-72' src={image} alt="polo t-shirt" />
                    </div>
                    <div className='pl-2'>
                        <div className='text-xl font-thin italic'>{vendor}</div>
                        <div className='text-gray-500 pb-2'> {description} </div>
                        <span className='font-bold  '>₹{Price} </span>
                        <span className='line-through text-gray-500'> ₹{originalPrice}</span>
                        <span className='text-green-400'>{offer} </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;