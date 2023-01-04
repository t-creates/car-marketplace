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
        image={car.image}
        monthlyPrice={car.price}
        mpg={car.mpg}
        transmission={car.transmission}
        seats={car.seats}
      />
    </div>
  ))

  return (
    (results?.length ? (
      <div className="grid 2xl:grid-cols-5 lg:grid-cols-3 xl:grid-cols-4 xl:gap-10 lg:gap-8 md:gap-5 sm:gap-5
      place-content-around md:grid-cols-2 sm:grid-cols-1 md:pb-10 sm:pb-10"
      >
        {results}
      </div>) : <div>
      <h1 className="text-4xl pb-10 pt-10 text-slate-800 raleway"> No Cars Found </h1>
    </div>
    )
  )
}

export default CardLayout