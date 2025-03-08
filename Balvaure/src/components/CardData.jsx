import React, { useEffect, useState } from 'react';
import bkoof from '../assets/bkoof.jpg';
import Card from './Card';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const cardData = Array.from({ length: 13 }, (_, i) => ({
  id: i + 1,
  vendor: "Belvaure",
  image: bkoof,
  description: "Oversized Classic T-Shirt",
  price: 899,
  originalPrice: 999,
  offer: "40%"
}));

function CardMain() {
  const itemstoshow = 5;
  const totalSlides = Math.ceil(cardData.length / itemstoshow);
  const [slide, setSlide] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(prevSlide => (prevSlide + 1) % totalSlides);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => setSlide(prevSlide => (prevSlide + 1) % totalSlides);
  const prevSlide = () => setSlide(prevSlide => (prevSlide - 1 + totalSlides) % totalSlides);

  return (
    <div className="relative mx-4 overflow-hidden">
      {/* Left Button */}
      <button className="absolute top-1/2 left-0 bg-transparent text-6xl text-white p-2 rounded-full z-10"
        onClick={prevSlide}
      >
        <IoIosArrowBack />
      </button>

      {/* Scrollable Cards */}
      <div className="flex overflow-hidden scrollbar-hide">
        <div 
          className="flex gap-3 px-2 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(calc(-${slide * 100 / totalSlides}% - 0.5rem))` }} // Adjusting for margin
        >
          {cardData.map(data => <Card key={data.id} {...data} />)}
        </div>
      </div>

      {/* Right Button */}
      <button className="absolute top-1/2 text-6xl right-0 bg-transparent text-white font-bold p-2 rounded-full z-10"
        onClick={nextSlide}
      >
        <IoIosArrowForward />
      </button>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
}

export default CardMain;
