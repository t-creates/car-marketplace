/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { IoIosArrowBack } from 'react-icons/io';

import { client, urlFor } from '../../utils/client';
import { carsQuery } from '../../utils/queries';
import CarDetails from '../../components/CarDetails/CarDetails';

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

  console.log(carData)
  console.log(router.query.id)

  return (
    <div className="w-full h-screen flex flex-col pt-28 lg:px-28 md:px-20 overflow-x-auto">
      <div
        className='text-slate-800 raleway text-base cursor-pointer hover:text-slate-900 place-self-start flex flex-row items-center pb-10'
        onClick={() => router.back()}
      >
        <span className='pr-2' size={15}><IoIosArrowBack /></span>
        Previous Page
      </div>
      <div className="">
        {carData.map((car) => (
          router.query.id === car.title && (
            <CarDetails car={car} key={car.title} />
          )
        ))
        }
      </div>
    </div>
  )
};

export default CarDetail;
