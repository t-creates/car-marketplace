/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { client } from '../../utils/client';
import { carsQuery } from '../../utils/queries';
import { urlFor } from '../../utils/client';
import Image from 'next/image';

import { IoIosArrowBack } from 'react-icons/io';

// const fetchPinDetails = () => {
//   const query = pinDetailQuery(pinId);

//   if (query) {
//     client.fetch(`${query}`).then((data) => {
//       setPinDetail(data[0]);
//       console.log(data);
//       if (data[0]) {
//         const query1 = pinDetailMorePinQuery(data[0]);
//         client.fetch(query1).then((res) => {
//           setPins(res);
//         });
//       }
//     });
//   }
// };

const CarDetail = () => {
  const router = useRouter();
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    client.fetch(carsQuery).then((data) => {
      setCarData(data);
    });
  }, [router.query.id]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center lg:px-28 md:px-20 overflow-x-auto">
      <div
        className='text-slate-800 font-semibold text-lg cursor-pointer hover:text-slate-900 place-self-start flex flex-row items-center'
        onClick={() => router.back()}
      >
        <span className='pr-2'><IoIosArrowBack /></span>
        Previous Page
      </div>
      <div className="box-border lg:w-[80%] lg:h-[50%] md:w-[100%] pb-10 my-5 text-slate-900 shadow-2xl backdrop-blur-sm bg-white rounded">
        <div className="">
          {carData.map((car) => (
            router.query.id === car.title ? (
              <div className='w-100 h-100 grid' key={car.title}>
                <div className='h-[100%] w-[65%] fixed'>
                  <Image className='rounded-l' src={urlFor(car.image).url()} layout='fill' />
                </div>
                <div className='w-[35%] h-100 flex justify-self-end place-items-end'>
                  <div className='flex justify-self-center place-items-center flex-col gap-5 w-full'>
                    <h2 className="text-3xl raleway pt-5 font-bold"> {car.title}</h2>
                    <h2 className='raleway font-semibold text-lg'>Year: {car.year}</h2>
                    <h2 className='raleway font-semibold text-lg'>Mpg: {car.mpg}</h2>
                    <h2 className='raleway font-semibold text-lg'>Seats: {car.seats}</h2>
                    <p className='raleway font-semibold text-lg'>Transmission: {car.transmission}</p>
                    <h2 className='raleway font-semibold text-lg'>Price: $ {car.price} </h2>
                    {car.about}
                    <div className="pt-10 flex place-items-center justify-self-center p-2">
                      <button
                        type="submit"
                        className="border-2 p-2 rounded bg-slate-50/75 border-slate-800 text-slate-800 hover:bg-slate-50/75 hover:scale-105
                        flex items-center justify-center h-10 md:h-16 w-[100%]"
                      >
                        Proceed to Payment Options
                      </button>
                    </div>
                  </div>
                </div>
              </div>) : ''
          ))}
        </div>
      </div>
    </div >
  )
};

export default CarDetail;
