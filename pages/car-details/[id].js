/*eslint-disable*/
import React, {useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { client } from '../../utils/client';
import { carsQuery } from '../../utils/queries';
import { urlFor } from '../../utils/client';

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

  return(
    <div className="mt-[60px] bg-slate-900">
      {carData.map((car) => (
        router.query.id === car.title ? (
          <div className="w-full h-screen flex flex-col justify-top items-center text-center pt-5" key={car.title}>
            <div>
              <h2 className="text-4xl font-medium text-[#00df9a] "> {car.title} - {car.year}</h2>
             
              <img className='mt-5 rounded-md'src ={urlFor(car.image).width(600).url()} size={45}/>
            </div>
            <div className='flex flex-row gap-4 mt-5 text-[#00df9a]'>
              <h2>Mpg: {car.mpg}</h2>
              <h2>Seats: {car.seats}</h2>
              <p>Transmission: {car.transmission}</p>
            </div>
            <div className="text-[#00df9a]">
            <h2 className='text-4xl '>$ {car.price} </h2>
              {car.about}
            </div>
          </div>) : ''
      ))}
    </div>
  ) 
};

export default CarDetail;
