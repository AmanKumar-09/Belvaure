import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import sectionimg1 from '../assets/sectionimg1.jpg';

const images = [
  { src: sectionimg1, alt: "NASA", label: "NASA" },
  { src: sectionimg1, alt: "Minions", label: "Minions" },
  { src: sectionimg1, alt: "Harry Potter", label: "Harry Potter" },
  { src: sectionimg1, alt: "Rick and Morty", label: "Rick and Morty" },
  { src: sectionimg1, alt: "Friends", label: "Friends" },
  { src: sectionimg1, alt: "Star Wars", label: "Star Wars" },
];

const Section2 = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 500; // Adjusted for wider cards
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <h2 className="text-center text-xl font-semibold mb-4">Shop by Fandom</h2>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 px-4 scrollbar-hide"
        style={{
          scrollBehavior: "smooth",
          width: "100%",
        }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="min-w-[500px] h-[600px] rounded-xl overflow-hidden relative"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-xl"
            />
            <p className="text-center font-bold mt-2">{image.label}</p>
          </motion.div>
        ))}
      </div>
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
};

export default Section2;