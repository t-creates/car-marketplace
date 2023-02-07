import React from 'react';

import { MdLocalGasStation } from 'react-icons/md';
import { GiCarSeat, GiCarDoor, GiGearStickPattern } from 'react-icons/gi';
import { TbEngine } from 'react-icons/tb';
import { BsSpeedometer } from 'react-icons/bs';
import { CarCarousel } from '..';

const CarDetails = ({ car: { title, price, seats, transmission, year, km, images, mpg, engine, doors } }) => {
  return (
    <div className="flex md:flex-row gap-10 sm:flex-col sm:p-2 p-0">
      <div className="md:w-[50%] sm:[75%]">
        <CarCarousel images={images} />
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex flex-col gap-2">
          <h2 className="text-slate-900 font-bold text-4xl raleway">{title}</h2>
          <h3 className="text-slate-900 font-semibold text-3xl raleway">$ {price}</h3>
          <h4 className="text-slate-900 font-semibold text-3xl raleway">{year}</h4>
        </div>
        <hr className="border-slate-900 opacity-25 border-2 mt-5 rounded-md" />
        <h5 className="items-center flex justify-start text-slate-800 text-2xl raleway my-5">Vehicle Details</h5>
        <div className="grid grid-cols-2 text-slate-800 gap-5">
          <div className="flex flex-row items-center justify-start">
            <BsSpeedometer size={30} className="mr-2" />
            <div className="flex flex-col">
              <p className="text-lg text-slate-600">Kilometers</p>
              <p className="text-xl">{km} km</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <GiGearStickPattern size={30} className="mr-2" />
            <div className="flex flex-col">
              <p className="text-lg text-slate-600">Transmission</p>
              <p className="text-xl">{transmission}</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <TbEngine size={30} className="mr-2" />
            <div className="flex flex-col">
              <p className="text-lg text-slate-600 items-start">Engine</p>
              <p className="text-xl">{engine}</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <MdLocalGasStation size={30} className="mr-2" />
            <div className="flex flex-col">
              <p className="text-lg text-slate-600">Miles Per Gallon</p>
              <p className="text-xl">{mpg} MPG</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <GiCarSeat size={30} className="mr-2" />
            <div className="flex flex-col items-center justify-center">
              <p className="text-lg text-slate-600">Seats</p>
              <p className="text-xl">{seats}</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <GiCarDoor size={30} className="mr-2" />
            <div className="flex flex-col items-center justify-center">
              <p className="text-lg text-slate-600">Doors</p>
              <p className="text-xl">{doors}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CarDetails;
