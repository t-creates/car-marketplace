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
    <main>
      <div className="bg-slate-800 mt-[60px] w-full h-full">
        <div className="flex-col flex-wrap auto-cols-auto">
          <div className="w-full h-screen  absolute">
            <Banner />
          </div>
          <div className="flex justify-center pt-[60px]">
            <h1 className="text-black-600 font-bold md:text-8xl mb-2 mt-3 sm:text-4xl sm:z-10">Luxury Cars</h1>
          </div>
          <div className="sm:mb-0 md:mb-24 xl:mb-[350px] lg:mb-[175px] 2xl:mb-[550px] mt-100" />
          <div className="flex justify-center flex-col sm:pt-5 md:pt-[90px]">
            <h1 className="text-neutral-100 text-3xl font-bold md:font-sans md:text-5xl mb-2 mt-3 text-center">Search for cars</h1>
            <SearchBar cars={cars} setSearchResults={setSearchResults} />
          </div>
          <div className="flex flex-row flex-wrap justify-evenly grid-flow-row justify-self-auto mt-96  sm:mt-0">
            <CardLayout searchResults={searchResults} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
