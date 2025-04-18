import React from "react";
import { useEffect, useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

export default function ImageCarousel() {
  const [index, setIndex] = useState(1); // Start from 1 because 0 will be the cloned last slide
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [hovering, setHovering] = useState(false);
  const slideRef = useRef();

  const images = [
    '/1Uber.png',
    '/2Uber.png',
    '/3Uber.png',
    '/4Uber.png',
    '/5Uber.png',
    '/6Uber.png',
    '/7Uber.png',
    '/8Uber.png',
    '/9Uber.png',
  ];

  const extendedImages = [
    images[images.length - 1], // Clone of last
    ...images,
    images[0], // Clone of first
  ];

  useEffect(() => {
    if (hovering) return;

    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }, 3000);

    return () => clearInterval(interval);
  }, [hovering]);

  // Handle the looping logic
  useEffect(() => {
    const handleTransitionEnd = () => {
      if (index === extendedImages.length - 1) {
        setIsTransitioning(false);
        setIndex(1);
      } else if (index === 0) {
        setIsTransitioning(false);
        setIndex(extendedImages.length - 2);
      }
    };

    const node = slideRef.current;
    node.addEventListener("transitionend", handleTransitionEnd);

    return () => node.removeEventListener("transitionend", handleTransitionEnd);
  }, [index, extendedImages.length]);

  const goToPrev = () => {
    setIndex((prev) => prev - 1);
    setIsTransitioning(true);
  };

  const goToNext = () => {
    setIndex((prev) => prev + 1);
    setIsTransitioning(true);
  };

  return (
    <div
      className="relative lg:w-[50rem] overflow-hidden mx-auto rounded-lg"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div
        ref={slideRef}
        className={`flex w-full  ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {extendedImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i}`}
            className="lg:w-[50rem] flex-shrink-0 object-cover"
          />
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={goToPrev}
        className='absolute left-4 top-1/2 transform -translate-y-1/2 font-semibold transition ease-in-out duration-100 bg-black bg-opacity-30 text-white rounded-full p-2 hover:bg-opacity-50'>
        <BsArrowLeft size={20} />
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className='absolute right-4 top-1/2 transform -translate-y-1/2 font-semibold transition ease-in-out duration-100 bg-black bg-opacity-30 text-white rounded-full p-2 hover:bg-opacity-50'>
        <BsArrowRight size={20} />
      </button>
    </div>
  );
}
