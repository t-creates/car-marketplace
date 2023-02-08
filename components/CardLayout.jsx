/*eslint-disable*/
import React from 'react';
import { urlFor } from '../utils/client';
import CarCards from './CarCards';

const CardLayout = ({ searchResults }) => {
  // Add Loader and Error Handling

  const results = searchResults?.map((car) => (
    <div key={car.title} className="justify-evenly">
      <CarCards
        name={car.title}
        images={car.images}
        monthlyPrice={car.price}
        mpg={car.mpg}
        transmission={car.transmission}
        seats={car.seats}
      />
    </div>
  ))

  return (
    (results?.length ? (
      <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 lg:gap-4 md:gap-6 sm:gap-5
      place-content-around md:grid-cols-1 sm:grid-cols-1 md:pb-10 sm:pb-10"
      >
        {results}
      </div>) : <div>
      <h1 className="text-4xl pb-10 pt-10 text-slate-800 raleway"> No Cars Found </h1>
    </div>
    )
  )
}

export default CardLayout