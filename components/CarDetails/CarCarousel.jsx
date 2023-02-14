import React, { useState } from 'react';
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
        <button
          onClick={handlePrevClick}
          type="button"
          className="w-8 h-full bg-slate-400 bg-opacity-10 text-black relative"
        >
          <BsChevronLeft size={30} />
        </button>
        <img
          className="object-cover h-full w-full overflow-hidden object-center"
          alt="car"
          src={urlFor(images[currentImage]).url()}
        />
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
          <div className="min-w-[180px] min-h-[110px] relative" key={selectedCar.title}>
            <img
              src={urlFor(selectedCar).url()}
              alt="car"
              className={`object-cover h-full w-full overflow-hidden object-center rounded ${index === currentImage ? 'active' : ''}`}
            // onClick={() => setCurrentImage(index)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default CarCarousel;
