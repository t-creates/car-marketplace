/*eslint-disable*/
import React from 'react';
import { urlFor } from '../utils/client';
import CarCards from './CarCards';

const CardLayout = ({searchResults}) => {

  const results = searchResults.map((car)=>(
      <div key={car.title} className="justify-evenly " >
        <CarCards name={car.title} img={urlFor(car.image).width(250).url()} monthlyPrice={car.price} mpg={car.mpg} transmission={car.transmission} seats={car.seats}  />
      </div>
  ))
  
  return (
    (results?.length ? (<div className=" grid 2xl:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 xl:gap-5 md:gap-5 place-content-around md:grid-cols-2 sm:grid-cols-1">
      {results} 
    </div>) : <div>
      <h1 className="text-4xl mb-10"> No Cars Found </h1>
    </div>
  )
  )
}

export default CardLayout