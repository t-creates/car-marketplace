import React, { useState } from 'react';
import Image from 'next/image';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import { urlFor } from '../../utils/client';

const CarCarousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const totalImages = (images.length - 1);

  const handlePrevClick = () => {
    if (currentImage !== 0) {
      setCurrentImage(currentImage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentImage !== totalImages) {
      setCurrentImage(currentImage + 1);
    }
  };

  return (
    <>
      <div className="w-full md:h-[375px] sm:h-[250px] relative flex flex-row items-center justify-between">
        <Image className="rounded" src={urlFor(images[currentImage]).url()} layout="fill" />
        <button
          onClick={handlePrevClick}
          type="button"
          className="w-8 h-full bg-slate-400 bg-opacity-10 text-black relative"
        >
          <BsChevronLeft size={30} />
        </button>
        <button
          onClick={handleNextClick}
          type="button"
          className="w-8 h-full bg-slate-400 bg-opacity-10 text-black relative"
        >
          <BsChevronRight size={30} />
        </button>
      </div>
      <div className="flex flex-row flex-1 overflow-scroll scrollbar-hide mt-5 gap-2">
        {images.map((selectedCar, index) => (
          <div className="min-w-[180px] min-h-[110px] relative focus:outline-2 focus:outline-blue-500" key={selectedCar.title}>
            <Image
              src={urlFor(selectedCar).url()}
              layout="fill"
              className={`rounded ${index === currentImage ? 'active' : ''}`}
              onClick={() => setCurrentImage(index)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default CarCarousel;
