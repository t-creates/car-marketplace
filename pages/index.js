import React, { useState, useEffect } from 'react';

import { SearchBar, CardLayout, Banner } from '../components';
import { client } from '../utils/client';
import { carsQuery } from '../utils/queries';

const Home = () => {
  const [cars, setCars] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch(carsQuery).then((data) => {
      setSearchResults(data);
      setCars(data);
      setLoading(false);
    });
  }, []);

  if (loading) return 'loading';

  return (
    <div className="">
      <div className="w-full h-full absolute">
        <Banner />
      </div>
      <div className="sm:flex sm:justify-center md:static md:pl-[35%] items-end md:pt-[7%] sm:pt-[180px]">
        <h1 className="raleway mb-2 mt-3 md:text-7xl sm:text-4xl sm:z-10 text-slate-800/90 text-shadow">Luxury Vehicles</h1>
      </div>
      <div className="sm:mb-0 md:mb-24 xl:mb-[350px] lg:mb-[195px] 2xl:mb-[550px] mt-100" />
      <div className="flex justify-center flex-col sm:pt-5 md:pt-[90px]">
        <h1 className="text-slate-800 raleway text-shadow-1 text-2xl md:text-4xl mb-2 mt-3 text-center">Search for cars</h1>
        <SearchBar cars={cars} setSearchResults={setSearchResults} />
      </div>
      <div className="flex flex-row flex-wrap justify-evenly grid-flow-row justify-self-auto mt-96 pb-10 sm:mt-0">
        <CardLayout searchResults={searchResults} />
      </div>
    </div>
  );
};

export default Home;
